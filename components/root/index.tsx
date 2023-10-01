"use client";

import AppTitle from '@/components/AppTitle';
import Demo from '@/components/ui/Demo';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';


type Props = {}

const RootApp = (props: Props) => {
    return (
      <div className=" space-y-14">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, type: 'easeInOut' }}
          >
            <AppTitle />
          </motion.div>
        </AnimatePresence>

        <div className='pb-20'>
          <Demo />
        </div>
      </div>
    );
}

export default RootApp