import React from 'react';
import RootLayout from './src/components/RootLayout';
import PageLayout from './src/components/PageLayout';
import './src/styles/global.css'
import './src/styles/styles.css'

export const wrapRootElement = ({ element, props }) => 
    <RootLayout {...props}>{element}</RootLayout>

export const wrapPageElement = ({ element, props }) =>
    <PageLayout>{element}</PageLayout>