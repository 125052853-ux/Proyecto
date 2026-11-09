//Screen de agregar habilidad

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

export default function AgregarHabilidadScreen() {
  const niveles = [
    { id: 'basic', etiqueta: 'Básico', seleccionado: false },
    { id: 'intermediate', etiqueta: 'Intermedio', seleccionado: true },
    { id: 'advanced', etiqueta: 'Avanzado', seleccionado: false },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Agregar habilidad"
        subtitle="Registra una nueva habilidad"
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
            <Input
              label="Nombre de la habilidad"
              placeholder="Ej. Programación en Python"
            />

            {/* Selector de Categoría */}
            <View style={estilos.grupoCampo}>
              <Text style={estilos.etiquetaCampo}>Categoría</Text>
              <TouchableOpacity style={estilos.botonDesplegable} activeOpacity={0.7}>
                <View style={estilos.izquierdaDesplegable}>
                  <Text style={estilos.iconoCarpetaDesplegable}>📁</Text>
                  <Text style={estilos.marcadorDesplegable}>
                    Selecciona una categoría
                  </Text>
                </View>
                <Text style={estilos.flechaDesplegable}>▾</Text>
              </TouchableOpacity>
            </View>

            {/* Selector de Nivel (Píldoras) */}
            <View style={estilos.grupoCampo}>
              <Text style={estilos.etiquetaCampo}>Nivel</Text>
              <View style={estilos.filaPildorasNivel}>
                {niveles.map((nivel) => (
                  <TouchableOpacity
                    key={nivel.id}
                    style={[
                      estilos.pildoraNivel,
                      nivel.seleccionado && estilos.pildoraNivelSeleccionada,
                    ]}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        estilos.textoPildoraNivel,
                        nivel.seleccionado && estilos.textoPildoraNivelSeleccionada,
                      ]}
                    >
                      {nivel.etiqueta}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Descripción */}
            <Input
              label="Descripción"
              placeholder="Cuenta qué sabes hacer y qué puedes enseñar."
              multiline={true}
              numberOfLines={4}
            />
          </View>

          {/* Botones de acción */}
          <View style={estilos.filaBotones}>
            <Button
              title="Cancelar"
              variant="secondary"
              style={estilos.botonCancelar}
            />
            <Button
              title="Guardar habilidad"
              icon={<Text style={estilos.iconoCheck}>✓</Text>}
              style={estilos.botonGuardar}
            />
          </View>
        </ScrollView>
      </View>

      {/* Navegación inferior */}
      <BottomNav role="participant" activeTab="MisHabilidades" />
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
  iconoCarpetaDesplegable: {
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
  filaPildorasNivel: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  pildoraNivel: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: borderRadius.full,
    borderWidth: 1.2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  pildoraNivelSeleccionada: {
    backgroundColor: '#DCE6F8',
    borderColor: colors.primary,
  },
  textoPildoraNivel: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  textoPildoraNivelSeleccionada: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
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