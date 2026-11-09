//Screen de publicar servicio
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

export default function PublicarServicioScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Publicar servicio"
        subtitle="Comparte tus habilidades con otros"
        showBack={true}
      />

      {/* Contenido en ScrollView */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Tarjeta de Formulario */}
          <View style={estilos.tarjetaFormulario}>
            {/* Título del servicio */}
            <Input
              label="Título del servicio"
              placeholder="Ej. Clases de programación en Python"
            />

            {/* Categoría Dropdown */}
            <View style={estilos.grupoCampo}>
              <Text style={estilos.etiquetaCampo}>Categoría</Text>
              <TouchableOpacity style={estilos.botonDesplegable} activeOpacity={0.7}>
                <View style={estilos.izquierdaDesplegable}>
                  <Text style={estilos.iconoDesplegable}>📁</Text>
                  <Text style={estilos.marcadorDesplegable}>
                    Selecciona una categoría
                  </Text>
                </View>
                <Text style={estilos.flechaDesplegable}>▾</Text>
              </TouchableOpacity>
            </View>

            {/* Descripción con contador */}
            <Input
              label="Descripción"
              placeholder="Describe en qué consiste tu servicio, qué aprenderá la persona y cómo lo llevarán a cabo."
              multiline={true}
              numberOfLines={4}
              charLimit={300}
            />

            {/* Disponibilidad Dropdown */}
            <View style={estilos.grupoCampo}>
              <Text style={estilos.etiquetaCampo}>Disponibilidad (opcional)</Text>
              <TouchableOpacity style={estilos.botonDesplegable} activeOpacity={0.7}>
                <View style={estilos.izquierdaDesplegable}>
                  <Text style={estilos.iconoDesplegable}>📅</Text>
                  <Text style={estilos.marcadorDesplegable}>
                    Selecciona tu disponibilidad
                  </Text>
                </View>
                <Text style={estilos.flechaDesplegable}>▾</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Botón Principal Publicar */}
          <Button
            title="Publicar servicio"
            icon={<Text style={estilos.iconoEnviar}>✈️</Text>}
            style={estilos.botonPublicar}
          />
        </ScrollView>
      </View>

      {/* Navegación inferior con pestaña Publicar activa */}
      <BottomNav role="participant" activeTab="Publicar" />
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
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  grupoCampo: {
    marginBottom: spacing.lg,
  },
  etiquetaCampo: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  botonDesplegable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  izquierdaDesplegable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconoDesplegable: {
    fontSize: 16,
    marginRight: 8,
  },
  marcadorDesplegable: {
    fontSize: typography.fontSizes.sm,
    color: colors.textMuted,
  },
  flechaDesplegable: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  botonPublicar: {
    marginBottom: spacing.lg,
  },
  iconoEnviar: {
    fontSize: 16,
    marginRight: 6,
    color: colors.white,
  },
});