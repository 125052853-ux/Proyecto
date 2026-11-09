//Screen de registrar

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

export default function RegistroScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Cabecera institucional con Logo */}
      <View style={estilos.cabecera}>
        <View style={estilos.insigniaLogo}>
          <View style={estilos.circuloIconoReloj}>
            <Text style={estilos.emojiReloj}>🕒</Text>
          </View>
        </View>
        <Text style={estilos.tituloApp}>Banco de Tiempo y Talento</Text>
        <Text style={estilos.subtituloApp}>
          Intercambia habilidades, comparte tiempo
        </Text>
      </View>

      {/* Formulario de registro en contenedor blanco */}
      <View style={globalStyles.bodyContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={globalStyles.scrollContent}
        >
          <Text style={estilos.titulo}>Crear cuenta</Text>
          <Text style={estilos.subtitulo}>
            Regístrate para empezar a intercambiar
          </Text>

          {/* Nombre completo */}
          <Input
            label="Nombre completo"
            placeholder="Nombre completo"
            icon={<Text style={estilos.icono}>👤</Text>}
          />

          {/* Correo electrónico */}
          <Input
            label="Correo electrónico"
            placeholder="correo@ejemplo.com"
            icon={<Text style={estilos.icono}>✉️</Text>}
            keyboardType="email-address"
          />

          {/* Teléfono */}
          <Input
            label="Teléfono"
            placeholder="+52 000 000 0000"
            icon={<Text style={estilos.icono}>📞</Text>}
            keyboardType="phone-pad"
          />

          {/* Contraseña */}
          <Input
            label="Contraseña"
            placeholder="Mínimo 8 caracteres"
            icon={<Text style={estilos.icono}>🔒</Text>}
            secureTextEntry={true}
          />

          {/* Confirmar contraseña */}
          <Input
            label="Confirmar contraseña"
            placeholder="Repite tu contraseña"
            icon={<Text style={estilos.icono}>🔒</Text>}
            secureTextEntry={true}
          />

          {/* Checkbox Acepto términos */}
          <View style={estilos.filaTerminos}>
            <View style={estilos.casillaVerificacion} />
            <Text style={estilos.textoTerminos}>
              Acepto los términos y condiciones
            </Text>
          </View>

          {/* Botón Crear cuenta */}
          <Button
            title="Crear cuenta"
            style={estilos.botonEnviar}
          />

          {/* Ya tienes cuenta */}
          <View style={estilos.filaPie}>
            <Text style={estilos.textoTieneCuenta}>¿Ya tienes cuenta?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={estilos.enlaceIniciarSesion}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cabecera: {
    paddingTop: 44,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  insigniaLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.accentRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  circuloIconoReloj: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiReloj: {
    fontSize: 20,
    color: colors.white,
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
  icono: {
    fontSize: 15,
  },
  filaTerminos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.md,
  },
  casillaVerificacion: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginRight: 8,
    backgroundColor: colors.white,
  },
  textoTerminos: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
  },
  botonEnviar: {
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
  filaPie: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingBottom: spacing.lg,
  },
  textoTieneCuenta: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
  },
  enlaceIniciarSesion: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
});