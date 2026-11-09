/**
 * components/Card.js
 * Tarjeta contenedor reutilizable con bordes redondeados y sombra
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Card({ title, subtitle, children, style }) {
  return (
    <View style={[globalStyles.card, style]}>
      {title ? <Text style={globalStyles.cardTitle}>{title}</Text> : null}
      {subtitle ? <Text style={globalStyles.cardSubtitle}>{subtitle}</Text> : null}
      {children}
    </View>
  );
}
