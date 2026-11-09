//Screen para gestionar solicitudes

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
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function GestionarSolicitudesScreen() {
  const solicitudesRecibidas = [
    {
      id: '1',
      titulo: 'Clases de matemáticas',
      remitente: 'Jorge B.',
      estado: 'Pendiente',
      mensaje: 'Hola, soy Jorge jeje',
      tipo: 'design',
    },
    {
      id: '2',
      titulo: 'Práctica de inglés',
      remitente: 'Leonardo S.',
      estado: 'Pendiente',
      mensaje: 'Hola soy leo jeje',
      tipo: 'languages',
    },
  ];

  const solicitudesEnviadas = [
    {
      id: '3',
      titulo: 'Diseño de logos',
      destinatario: 'Antonio.',
      fecha: '22 sep 2026',
      estado: 'Aceptada',
      tipoEstado: 'active',
      nota: 'El usuario aceptó tu solicitud.',
      tipo: 'music',
    },
    {
      id: '4',
      titulo: 'Clases de programación',
      destinatario: 'Ing Isay.',
      fecha: '25 sep 2026',
      estado: 'Rechazada',
      tipoEstado: 'inactive',
      nota: 'El usuario rechazó tu solicitud.',
      tipo: 'tech',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Gestionar solicitudes"
        subtitle="Revisa el estado de tus solicitudes"
        showBack={true}
      />

      {/* Contenido */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Segmented Switch Tabs */}
          <View style={estilos.contenedorCambioPestana}>
            <TouchableOpacity style={estilos.botonPestanaInactiva} activeOpacity={0.7}>
              <Text style={estilos.textoBotonPestanaInactiva}>Enviadas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botonPestanaActiva} activeOpacity={0.7}>
              <Text style={estilos.textoBotonPestanaActiva}>Recibidas</Text>
            </TouchableOpacity>
          </View>

          {/* Sección Solicitudes Recibidas */}
          <Text style={estilos.tituloSeccion}>Solicitudes recibidas</Text>

          {solicitudesRecibidas.map((solicitud) => (
            <View key={solicitud.id} style={estilos.tarjeta}>
              <View style={estilos.filaEncabezadoTarjeta}>
                <CategoryIcon type={solicitud.tipo} size={44} />
                <View style={estilos.grupoInfoEncabezado}>
                  <View style={estilos.filaTituloEstado}>
                    <Text style={estilos.tituloSolicitud}>{solicitud.titulo}</Text>
                    <View style={estilos.insigniaPendiente}>
                      <Text style={estilos.textoInsigniaPendiente}>{solicitud.estado}</Text>
                    </View>
                  </View>

                  <View style={estilos.filaRemitente}>
                    <Text style={{ fontSize: 12, marginRight: 4 }}>👤</Text>
                    <Text style={estilos.nombreRemitente}>{solicitud.remitente}</Text>
                  </View>
                </View>
              </View>

              <Text style={estilos.textoMensaje}>{solicitud.mensaje}</Text>

              {/* Botones Aceptar y Rechazar */}
              <View style={estilos.filaBotonesAccion}>
                <TouchableOpacity style={estilos.botonAceptar} activeOpacity={0.8}>
                  <Text style={estilos.textoBotonAceptar}>Aceptar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botonRechazar} activeOpacity={0.8}>
                  <Text style={estilos.textoBotonRechazar}>Rechazar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Sección Solicitudes Enviadas */}
          <Text style={[estilos.tituloSeccion, { marginTop: spacing.md }]}>
            Solicitudes enviadas
          </Text>

          {solicitudesEnviadas.map((solicitud) => (
            <View key={solicitud.id} style={estilos.tarjeta}>
              <View style={estilos.filaEncabezadoTarjeta}>
                <CategoryIcon type={solicitud.tipo} size={44} />
                <View style={estilos.grupoInfoEncabezado}>
                  <View style={estilos.filaTituloEstado}>
                    <Text style={estilos.tituloSolicitud}>{solicitud.titulo}</Text>
                    <View
                      style={[
                        estilos.pildoraEstado,
                        solicitud.tipoEstado === 'active' && estilos.pildoraEstadoAceptada,
                        solicitud.tipoEstado === 'inactive' && estilos.pildoraEstadoRechazada,
                        solicitud.tipoEstado === 'pending' && estilos.pildoraEstadoPendiente,
                      ]}
                    >
                      <Text
                        style={[
                          estilos.textoPildoraEstado,
                          solicitud.tipoEstado === 'active' && estilos.textoEstadoAceptada,
                          solicitud.tipoEstado === 'inactive' && estilos.textoEstadoRechazada,
                          solicitud.tipoEstado === 'pending' && estilos.textoEstadoPendiente,
                        ]}
                      >
                        {solicitud.estado}
                      </Text>
                    </View>
                  </View>

                  <View style={estilos.filaRemitente}>
                    <Text style={{ fontSize: 12, marginRight: 4 }}>👤</Text>
                    <Text style={estilos.nombreRemitente}>{solicitud.destinatario}</Text>
                    <Text style={estilos.metaFecha}> 📅 {solicitud.fecha}</Text>
                  </View>
                </View>
              </View>

              <View style={estilos.filaNotaPie}>
                <Text style={estilos.textoNota}>{solicitud.nota}</Text>
                <TouchableOpacity style={estilos.botonDetalles} activeOpacity={0.8}>
                  <Text style={estilos.textoBotonDetalles}>Ver detalles</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
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
  contenedorCambioPestana: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  botonPestanaActiva: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotonPestanaActiva: {
    color: colors.white,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.semiBold,
  },
  botonPestanaInactiva: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotonPestanaInactiva: {
    color: colors.textSecondary,
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.medium,
  },
  tituloSeccion: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  tarjeta: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  filaEncabezadoTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grupoInfoEncabezado: {
    flex: 1,
    marginLeft: spacing.md,
  },
  filaTituloEstado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloSolicitud: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  insigniaPendiente: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  textoInsigniaPendiente: {
    fontSize: 10,
    color: '#92400E',
    fontWeight: typography.fontWeights.semiBold,
  },
  filaRemitente: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  nombreRemitente: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  metaFecha: {
    fontSize: 10,
    color: colors.textMuted,
    marginLeft: 6,
  },
  textoMensaje: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    marginVertical: spacing.md,
    lineHeight: 16,
  },
  filaBotonesAccion: {
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'flex-end',
  },
  botonAceptar: {
    backgroundColor: '#10B981',
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
  },
  textoBotonAceptar: {
    color: colors.white,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.bold,
  },
  botonRechazar: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
  },
  textoBotonRechazar: {
    color: '#B91C1C',
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.bold,
  },
  pildoraEstado: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
  },
  pildoraEstadoAceptada: {
    backgroundColor: '#DCFCE7',
  },
  textoEstadoAceptada: {
    color: '#15803D',
  },
  pildoraEstadoRechazada: {
    backgroundColor: '#FEE2E2',
  },
  textoEstadoRechazada: {
    color: '#B91C1C',
  },
  pildoraEstadoPendiente: {
    backgroundColor: '#FEF3C7',
  },
  textoEstadoPendiente: {
    color: '#92400E',
  },
  textoPildoraEstado: {
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  filaNotaPie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.xs,
  },
  textoNota: {
    fontSize: 11,
    color: colors.textMuted,
    flex: 1,
  },
  botonDetalles: {
    backgroundColor: '#E8EDF9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: borderRadius.md,
  },
  textoBotonDetalles: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
});