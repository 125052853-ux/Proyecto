//Screen para confirmar servicio y definir horas

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { colors, spacing, borderRadius, typography } from '../styles/theme';
import Header from '../components/Header';
import Button from '../components/Button';
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function confirmareServicioScreen() {
  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Solicitar servicio"
        subtitle="Confirma tu solicitud"
        showBack={true}
      />

      {/* Contenido en ScrollView */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Tarjeta Resumen del Servicio */}
          <View style={estilos.tarjetaResumenServicio}>
            <View style={estilos.filaInfoSuperior}>
              <CategoryIcon type="tech" size={48} />
              <View style={estilos.detallesServicio}>
                <Text style={estilos.tituloServicio}>
                  Clases de programación en Python
                </Text>
                <View style={estilos.etiquetaTecnologia}>
                  <Text style={estilos.textoEtiquetaTecnologia}>Tecnología</Text>
                </View>
              </View>
            </View>

            <Text style={estilos.textoDescripcion}>
              Te enseño lo básico de Python, estructuras y ejercicios.
            </Text>

            <View style={estilos.filaPieResumen}>
              <View style={estilos.grupoAutor}>
                <View style={estilos.avatarAutor}>
                  <Text style={{ fontSize: 13 }}>👤</Text>
                </View>
                <Text style={estilos.nombreAutor}>Jorge B.</Text>
              </View>

              <Text style={estilos.textoTarifa}>1 crédito / hora</Text>
            </View>
          </View>

          {/* Tarjeta de Formulario de Solicitud */}
          <View style={estilos.tarjetaFormularioSolicitud}>
            <Text style={estilos.etiquetaCampo}>Mensaje para Jorge</Text>
            <TextInput
              style={estilos.inputMensaje}
              value="Hola, me interesa tu servicio. ¿Podemos coordinar días y horario?"
              multiline={true}
              numberOfLines={4}
            />

            {/* Stepper Horas solicitadas */}
            <View style={estilos.filaContador}>
              <Text style={estilos.etiquetaContador}>Horas solicitadas</Text>

              <View style={estilos.controlesContador}>
                <TouchableOpacity style={estilos.botonRestaContador} activeOpacity={0.7}>
                  <Text style={estilos.iconoRestaContador}>−</Text>
                </TouchableOpacity>

                <Text style={estilos.valorContador}>1</Text>

                <TouchableOpacity style={estilos.botonSumaContador} activeOpacity={0.7}>
                  <Text style={estilos.iconoSumaContador}>＋</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={estilos.divisor} />

            {/* Desglose de Créditos */}
            <View style={estilos.filaCosto}>
              <Text style={estilos.etiquetaCosto}>Créditos disponibles</Text>
              <Text style={estilos.valorCosto}>3 créditos</Text>
            </View>

            <View style={estilos.filaCosto}>
              <Text style={estilos.etiquetaCostoTotal}>Total a pagar</Text>
              <Text style={estilos.valorCostoTotal}>1 crédito</Text>
            </View>

            <Text style={estilos.avisoCreditos}>
              Los créditos se descuentan al aceptar la solicitud.
            </Text>
          </View>

          {/* Botones de Acción */}
          <View style={estilos.filaBotones}>
            <Button
              title="Cancelar"
              variant="secondary"
              style={estilos.botonCancelar}
            />
            <Button
              title="Enviar solicitud"
              icon={<Text style={estilos.iconoEnviar}>✈️</Text>}
              style={estilos.botonEnviar}
            />
          </View>
        </ScrollView>
      </View>

      {/* Navegación inferior */}
      <BottomNav role="participant" activeTab="Solicitudes" />
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
  tarjetaResumenServicio: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  filaInfoSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detallesServicio: {
    flex: 1,
    marginLeft: spacing.md,
  },
  tituloServicio: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  etiquetaTecnologia: {
    backgroundColor: '#EDE9FE',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    marginTop: 4,
  },
  textoEtiquetaTecnologia: {
    fontSize: 10,
    color: '#6D28D9',
    fontWeight: typography.fontWeights.semiBold,
  },
  textoDescripcion: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginVertical: spacing.md,
    lineHeight: 16,
  },
  filaPieResumen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.xs,
  },
  grupoAutor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarAutor: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  nombreAutor: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
  },
  textoTarifa: {
    fontSize: typography.fontSizes.xs,
    color: '#059669',
    fontWeight: typography.fontWeights.bold,
  },
  tarjetaFormularioSolicitud: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  etiquetaCampo: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  inputMensaje: {
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    minHeight: 90,
    textAlignVertical: 'top',
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  filaContador: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  etiquetaContador: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  controlesContador: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  botonRestaContador: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF2F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconoRestaContador: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  valorContador: {
    fontSize: typography.fontSizes.lg,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    minWidth: 20,
    textAlign: 'center',
  },
  botonSumaContador: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconoSumaContador: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
  divisor: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginVertical: spacing.sm,
  },
  filaCosto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  etiquetaCosto: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
  },
  valorCosto: {
    fontSize: typography.fontSizes.xs,
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.semiBold,
  },
  etiquetaCostoTotal: {
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.bold,
  },
  valorCostoTotal: {
    fontSize: typography.fontSizes.sm,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  avisoCreditos: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
  filaBotones: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  botonCancelar: {
    flex: 1,
  },
  botonEnviar: {
    flex: 1.4,
  },
  iconoEnviar: {
    color: colors.white,
    fontSize: 14,
    marginRight: 6,
  },
});