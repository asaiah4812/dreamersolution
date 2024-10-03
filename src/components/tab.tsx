'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
  isValidElement,
} from 'react'

interface TabContextType {
  activeTab: string
  setActiveTab: (value: string) => void
  wobbly: boolean
  hover: boolean
  defaultValue: string
  prevIndex: number
  setPrevIndex: (value: number) => void
  tabsOrder: string[]
}

const TabContext = createContext<TabContextType | undefined>(undefined)

export const useTabs = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider')
  }
  return context
}

interface TabsProviderProps {
  children: ReactNode
  defaultValue: string
  wobbly?: boolean
  hover?: boolean
}

export const TabsProvider: React.FC<TabsProviderProps> = ({
  children,
  defaultValue,
  wobbly = true,
  hover = false,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  const [prevIndex, setPrevIndex] = useState(0)
  const [tabsOrder, setTabsOrder] = useState<string[]>([])

  useEffect(() => {
    const order: string[] = []
    React.Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === TabsContent) {
        order.push(child.props.value)
      }
    })
    setTabsOrder(order)
  }, [children])

  return (
    <TabContext.Provider
      value={{
        activeTab,
        setActiveTab,
        wobbly,
        hover,
        defaultValue,
        setPrevIndex,
        prevIndex,
        tabsOrder,
      }}
    >
      {children}
    </TabContext.Provider>
  )
}

interface TabsBtnProps {
  children: ReactNode
  className?: string
  value: string
}

export const TabsBtn: React.FC<TabsBtnProps> = ({ children, className, value }) => {
  const {
    activeTab,
    setPrevIndex,
    setActiveTab,
    defaultValue,
    hover,
    wobbly,
    tabsOrder,
  } = useTabs()

  const handleClick = () => {
    setPrevIndex(tabsOrder.indexOf(activeTab))
    setActiveTab(value)
  }

  return (
    <motion.div
      className={cn(
        `cursor-pointer sm:p-2 p-1 sm:px-4 px-2 rounded-md relative `,
        className
      )}
      onFocus={hover ? handleClick : undefined}
      onMouseEnter={hover ? handleClick : undefined}
      onClick={handleClick}
    >
      {children}

      {activeTab === value && (
        <AnimatePresence mode="wait">
          <motion.div
            transition={{
              layout: {
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.2,
              },
            }}
            layoutId={defaultValue}
            className="absolute w-full h-full left-0 top-0  bg-white rounded-md  z-[1]"
          />
        </AnimatePresence>
      )}

      {wobbly && activeTab === value && (
        <>
          <AnimatePresence mode="wait">
            <motion.div
              transition={{
                layout: {
                  duration: 0.4,
                  ease: 'easeInOut',
                  delay: 0.04,
                },
              }}
              layoutId={defaultValue}
              className="absolute w-full h-full left-0 top-0 bg-white rounded-md  z-[1] tab-shadow"
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              transition={{
                layout: {
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: 0.2,
                },
              }}
              layoutId={`${defaultValue}b`}
              className="absolute w-full h-full left-0 top-0 bg-white rounded-md  z-[1] tab-shadow"
            />
          </AnimatePresence>
        </>
      )}
    </motion.div>
  )
}

interface TabsContentProps {
  children: ReactNode
  className?: string
  value: string
  yValue?: number
}

export const TabsContent: React.FC<TabsContentProps> = ({ children, className, value, yValue }) => {
  const { activeTab, tabsOrder, prevIndex } = useTabs()
  const isForward = tabsOrder.indexOf(activeTab) > prevIndex

  return (
    <AnimatePresence mode="popLayout">
      {activeTab === value && (
        <motion.div
          initial={{ opacity: 0, y: yValue ? (isForward ? 10 : -10) : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: yValue ? (isForward ? -50 : 50) : 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className={cn(' p-2 px-4 rounded-md relative', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}