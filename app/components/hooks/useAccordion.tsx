"use client";

import { useState, useCallback, useRef, useEffect } from 'react';

interface UseAccordionOptions {
  allowMultiple?: boolean;
  defaultOpen?: string[];
  onToggle?: (itemId: string, isOpen: boolean) => void;
}

export function useAccordion(options: UseAccordionOptions = {}) {
  const { allowMultiple = false, defaultOpen = [], onToggle } = options;
  
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());
  const contentRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      const isCurrentlyOpen = prev.has(itemId);

      if (isCurrentlyOpen) {
        // Close item with animation
        setAnimatingItems(current => new Set([...current, itemId]));
        setTimeout(() => {
          setOpenItems(items => {
            const updated = new Set(items);
            updated.delete(itemId);
            return updated;
          });
          setAnimatingItems(current => {
            const updated = new Set(current);
            updated.delete(itemId);
            return updated;
          });
        }, 150); // Match CSS transition duration
      } else {
        // Open item
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }

      // Call onToggle callback
      if (onToggle) {
        onToggle(itemId, !isCurrentlyOpen);
      }

      return newOpenItems;
    });
  }, [allowMultiple, onToggle]);

  const openItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(itemId);
      
      if (onToggle) {
        onToggle(itemId, true);
      }
      
      return newOpenItems;
    });
  }, [allowMultiple, onToggle]);

  const closeItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      newOpenItems.delete(itemId);
      
      if (onToggle) {
        onToggle(itemId, false);
      }
      
      return newOpenItems;
    });
  }, [onToggle]);

  const isOpen = useCallback((itemId: string) => {
    return openItems.has(itemId);
  }, [openItems]);

  const isAnimating = useCallback((itemId: string) => {
    return animatingItems.has(itemId);
  }, [animatingItems]);

  const setContentRef = useCallback((itemId: string, element: HTMLElement | null) => {
    contentRefs.current[itemId] = element;
  }, []);

  const getContentHeight = useCallback((itemId: string) => {
    const element = contentRefs.current[itemId];
    if (element) {
      return element.scrollHeight;
    }
    return 0;
  }, []);

  // Initialize accordion on mount
  useEffect(() => {
    // Add any initialization logic here if needed
    return () => {
      // Cleanup if needed
    };
  }, []);

  return {
    openItems: Array.from(openItems),
    openItem,
    closeItem,
    toggleItem,
    isOpen,
    isAnimating,
    setContentRef,
    getContentHeight,
    allowMultiple
  };
}

export default useAccordion;
