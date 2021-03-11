/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

type PropType = {
    children: React.ReactNode
    title: string

}

export default  function Layout ({title, children}: PropType): JSX.Element{
    return (
        <SafeAreaView style={styles.container}>
            <Text>{title}</Text>
      {children}
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1'
    },
    buttonsContainer: {
      padding: 10
    },
    textStyle: {
      textAlign: 'center',
      marginBottom: 8
    }
  });
