//Screen de olvido su contraseña

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
import Input from '../components/Input';
import Button from '../components/Button';

export default function RecuperarContrasenaScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Botón de volver y cabecera institucional */}
      <View style={estilos.barraSuperior}>
        <TouchableOpacity style={estilos.botonVolver} activeOpacity={0.7}>
          <Text style={estilos.flechaVolver}>←</Text>
        </TouchableOpacity>
        <View style={estilos.insigniaLogo}>
          <View style={estilos.circuloIconoReloj}>
            <Text style={estilos.emojiReloj}>🕒</Text>
          </View>
        </View>
        <View style={{ width: 36 }} />
      </View>

      <View style={estilos.contenedorTitulo}>
        <Text style={estilos.tituloApp}>Banco de Tiempo y Talento</Text>
        <Text style={estilos.subtituloApp}>
          Intercambia habilidades, comparte tiempo
        </Text>
      </View>

      {/* Contenedor blanco con información y formulario */}
      <View style={globalStyles.bodyContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.scrollContent}
        >
          <Text style={estilos.titulo}>Restablecer contraseña</Text>
          <Text style={estilos.subtitulo}>Recupera el acceso a tu cuenta</Text>

          {/* Ilustración de candado */}
          <View style={estilos.cajaIlustracion}>
            <View style={estilos.circuloCandado}>
              <Text style={estilos.iconoCandado}>🔒</Text>
            </View>
            <Text style={estilos.encabezadoSeccion}>¿Olvidaste tu contraseña?</Text>
            <Text style={estilos.textoInfo}>
              Ingresa tu correo y te enviaremos un enlace para crear una nueva
              contraseña.
            </Text>
          </View>

          {/* Campo de correo */}
          <Input
            label="Correo electrónico"
            placeholder="correo@ejemplo.com"
            keyboardType="email-address"
          />

          {/* Botón Enviar enlace */}
          <Button
            title="Enviar enlace"
            icon={<Text style={estilos.iconoEnviar}>✈️</Text>}
            style={estilos.botonEnviar}
          />

          {/* Volver a iniciar sesión */}
          <View style={estilos.filaPie}>
            <Text style={estilos.textoRecordado}>¿Ya la recordaste?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={estilos.textoVolverLogin}>Volver a iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  barraSuperior: {
    paddingTop: 44,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  botonVolver: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flechaVolver: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  insigniaLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.accentRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiReloj: {
    fontSize: 18,
    color: colors.white,
  },
  contenedorTitulo: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  tituloApp: {
    color: colors.white,
    fontSize: typography.fontSizes.xl,
    fontWeight: typography.fontWeights.bold,
  },
  subtituloApp: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: typography.fontSizes.xs,
    marginTop: 2,
  },
  titulo: {
    fontSize: typography.fontSizes.xxl,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  subtitulo: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    marginTop: 2,
  },
  cajaIlustracion: {
    alignItems: 'center',
    marginVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  circuloCandado: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#E8EDF9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  iconoCandado: {
    fontSize: 32,
  },
  encabezadoSeccion: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  textoInfo: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  iconoEnviar: {
    fontSize: 16,
    marginRight: 6,
  },
  botonEnviar: {
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  filaPie: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  textoRecordado: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
  },
  textoVolverLogin: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
});