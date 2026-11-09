/**
 * screens/AgregarCategoriaScreen.js
 * Pantalla para que el administrador agregue una nueva categoría
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';

export default function AgregarCategoriaScreen() {
  const opcionesIcono = [
    { id: '1', emoji: '💻', bg: '#DCE6F8', borde: true },
    { id: '2', emoji: '💬', bg: '#D1FAE5', borde: false },
    { id: '3', emoji: '🎨', bg: '#FEF3C7', borde: false },
    { id: '4', emoji: '📖', bg: '#EDE9FE', borde: false },
    { id: '5', emoji: '🎵', bg: '#FCE7F3', borde: false },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Agregar categoría"
        subtitle="Crea una nueva categoría"
        showBack={true}
        rightComponent={
          <View style={globalStyles.adminProfilePill}>
            <Text style={{ marginRight: 4 }}>👤</Text>
            <Text style={globalStyles.adminProfileText}>Administrador ▾</Text>
          </View>
        }
      />

      {/* Contenido en fondo gris */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Tarjeta con campos de formulario */}
          <View style={estilos.tarjetaFormulario}>
            <Input
              label="Nombre de la categoría"
              placeholder="Ej. Cocina"
            />

            <Input
              label="Descripción"
              placeholder="Describe qué habilidades incluye esta categoría."
              multiline={true}
              numberOfLines={4}
            />
          </View>

          {/* Tarjeta Selección de Color e Ícono */}
          <View style={estilos.tarjetaSeleccionIcono}>
            <Text style={estilos.tituloSeccion}>Color e icono</Text>

            <View style={estilos.filaIconos}>
              {opcionesIcono.map((opc) => (
                <TouchableOpacity
                  key={opc.id}
                  style={[
                    estilos.opcionIcono,
                    { backgroundColor: opc.bg },
                    opc.borde && estilos.opcionIconoSeleccionada,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text style={estilos.emojiOpcion}>{opc.emoji}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Botones Cancelar y Guardar categoría */}
          <View style={estilos.filaBotones}>
            <Button
              title="Cancelar"
              variant="secondary"
              style={estilos.botonCancelar}
            />
            <Button
              title="Guardar categoría"
              icon={<Text style={estilos.iconoCheck}>✓</Text>}
              style={estilos.botonGuardar}
            />
          </View>
        </ScrollView>
      </View>

      {/* Barra de navegación inferior */}
      <BottomNav role="admin" activeTab="Categorias" />
    </View>
  );
}

const estilos = StyleSheet.create({
  cuerpo: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  contenidoScroll: {
    paddingBottom: 24,
  },
  tarjetaFormulario: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tarjetaSeleccionIcono: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tituloSeccion: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  filaIconos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  opcionIcono: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opcionIconoSeleccionada: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  emojiOpcion: {
    fontSize: 22,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  botonCancelar: {
    flex: 1,
  },
  botonGuardar: {
    flex: 1.3,
  },
  iconoCheck: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});