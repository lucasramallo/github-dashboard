import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';

export default function DialogComponent(props) {
  
  const visible = props.visible
  const onDismiss  = props.onDismiss

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Icon icon="security" />
        <Dialog.Title style={styles.title}>Your data is safe!</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium" style={styles.content}>We don't have access to your private github data. All data is provided by github public API.</Text>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontFamily: 'Inter_500Medium',
  },
  content: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14
  }
});
