//Screen de descargar reportes

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
import Button from '../components/Button';
import BottomNav from '../components/BottomNav';

export default function DescargarReportesScreen() {
  const opcionesReporte = [
    { id: 'usuarios', etiqueta: 'Reporte de usuarios', seleccionado: true },
    { id: 'participantes', etiqueta: 'Reporte de participantes', seleccionado: false },
    { id: 'habilidades', etiqueta: 'Reporte de habilidades', seleccionado: false },
    { id: 'solicitudes', etiqueta: 'Reporte de solicitudes', seleccionado: false },
  ];

  const opcionesFormato = [
    { id: 'pdf', etiqueta: 'PDF', seleccionado: true },
    { id: 'excel', etiqueta: 'Excel', seleccionado: false },
    { id: 'csv', etiqueta: 'CSV', seleccionado: false },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Descargar reportes"
        subtitle="Exporta la información del sistema"
        showBack={true}
        rightComponent={
          <View style={globalStyles.adminProfilePill}>
            <Text style={{ marginRight: 4 }}>👤</Text>
            <Text style={globalStyles.adminProfileText}>Administrador ▾</Text>
          </View>
        }
      />

      {/* Contenido */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Tarjeta Selección Tipo de Reporte */}
          <View style={estilos.tarjeta}>
            <Text style={estilos.tituloSeccionTarjeta}>Tipo de reporte</Text>

            {opcionesReporte.map((opcion) => (
              <TouchableOpacity
                key={opcion.id}
                style={estilos.filaRadio}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    estilos.radioExterior,
                    opcion.seleccionado && estilos.radioExteriorSeleccionado,
                  ]}
                >
                  {opcion.seleccionado && <View style={estilos.radioInterior} />}
                </View>
                <Text
                  style={[
                    estilos.etiquetaRadio,
                    opcion.seleccionado && estilos.etiquetaRadioSeleccionada,
                  ]}
                >
                  {opcion.etiqueta}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tarjeta Formato */}
          <View style={estilos.tarjeta}>
            <Text style={estilos.tituloSeccionTarjeta}>Formato</Text>
            <View style={estilos.filaPildorasFormato}>
              {opcionesFormato.map((formato) => (
                <TouchableOpacity
                  key={formato.id}
                  style={[
                    estilos.pildoraFormato,
                    formato.seleccionado && estilos.pildoraFormatoSeleccionada,
                  ]}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      estilos.textoPildoraFormato,
                      formato.seleccionado && estilos.textoPildoraFormatoSeleccionada,
                    ]}
                  >
                    {formato.etiqueta}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Tarjeta Rango de Fechas */}
          <View style={estilos.tarjeta}>
            <Text style={estilos.tituloSeccionTarjeta}>Rango de fechas</Text>
            <View style={estilos.filaFechas}>
              <View style={estilos.contenedorEntradaFecha}>
                <Text style={estilos.valorEntradaFecha}>01/09/2026</Text>
                <Text>📅</Text>
              </View>

              <View style={estilos.contenedorEntradaFecha}>
                <Text style={estilos.valorEntradaFecha}>30/09/2026</Text>
                <Text>📅</Text>
              </View>
            </View>
          </View>

          {/* Botón Descargar reporte */}
          <Button
            title="Descargar reporte"
            icon={<Text style={estilos.iconoBotonDescarga}>⬇</Text>}
            style={estilos.botonDescarga}
          />

          {/* Sección Descargas Recientes */}
          <Text style={estilos.tituloRecientes}>Descargas recientes</Text>

          {/* Item 1: PDF */}
          <View style={estilos.tarjetaItemReciente}>
            <View style={[estilos.cajaIconoArchivo, { backgroundColor: '#FDECF0' }]}>
              <Text style={{ fontSize: 18 }}>📄</Text>
            </View>
            <View style={estilos.detallesArchivo}>
              <Text style={estilos.nombreArchivo}>reporte-usuarios.pdf</Text>
              <Text style={estilos.metaArchivo}>02 oct 2026 · 245 KB</Text>
            </View>
            <TouchableOpacity style={estilos.botonAccionArchivo}>
              <Text style={estilos.iconoAccionArchivo}>⬇</Text>
            </TouchableOpacity>
          </View>

          {/* Item 2: Excel */}
          <View style={estilos.tarjetaItemReciente}>
            <View style={[estilos.cajaIconoArchivo, { backgroundColor: '#E6F8F0' }]}>
              <Text style={{ fontSize: 18 }}>📗</Text>
            </View>
            <View style={estilos.detallesArchivo}>
              <Text style={estilos.nombreArchivo}>reporte-general.xlsx</Text>
              <Text style={estilos.metaArchivo}>28 sep 2026 · 98 KB</Text>
            </View>
            <TouchableOpacity style={estilos.botonAccionArchivo}>
              <Text style={estilos.iconoAccionArchivo}>⬇</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Navegación inferior Admin */}
      <BottomNav role="admin" activeTab="Reportes" />
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
  tarjeta: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tituloSeccionTarjeta: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  filaRadio: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
  },
  radioExterior: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  radioExteriorSeleccionado: {
    borderColor: colors.primary,
  },
  radioInterior: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  etiquetaRadio: {
    fontSize: typography.fontSizes.sm,
    color: colors.textSecondary,
  },
  etiquetaRadioSeleccionada: {
    color: colors.textPrimary,
    fontWeight: typography.fontWeights.semiBold,
  },
  filaPildorasFormato: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  pildoraFormato: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  pildoraFormatoSeleccionada: {
    backgroundColor: '#DCE6F8',
    borderColor: '#B8CDF0',
  },
  textoPildoraFormato: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  textoPildoraFormatoSeleccionada: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  filaFechas: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  contenedorEntradaFecha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  valorEntradaFecha: {
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
  },
  botonDescarga: {
    marginVertical: spacing.md,
  },
  iconoBotonDescarga: {
    color: colors.white,
    fontSize: 16,
    marginRight: 6,
    fontWeight: 'bold',
  },
  tituloRecientes: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  tarjetaItemReciente: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  cajaIconoArchivo: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  detallesArchivo: {
    flex: 1,
  },
  nombreArchivo: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  metaArchivo: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  botonAccionArchivo: {
    padding: 8,
  },
  iconoAccionArchivo: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
});