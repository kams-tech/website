import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Layout from './src/components/RootLayout';

export const wrapRootElement = ({ element, props }) => 
    <Layout {...props}>{element}</Layout>

export const wrapPageElement = ({ element, props }) =>
    <AnimatePresence mode='wait'>{element}</AnimatePresence>