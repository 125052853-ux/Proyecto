//Screen de habilidades del participante

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
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function MisHabilidadesParticipanteScreen() {
  const habilidades = [
    {
      id: '1',
      titulo: 'Programación en Python',
      categoria: 'Tecnología',
      descripcion: 'Te enseño lo básico de Python, estructuras y ejercicios.',
      tipo: 'tech',
      fondoEtiqueta: '#EDE9FE',
      colorEtiqueta: '#6D28D9',
    },
    {
      id: '2',
      titulo: 'Diseño de logos',
      categoria: 'Diseño',
      descripcion: 'Creación de logos simples y profesionales.',
      tipo: 'music',
      fondoEtiqueta: '#FCE7F3',
      colorEtiqueta: '#9D174D',
    },
    {
      id: '3',
      titulo: 'Inglés conversacional',
      categoria: 'Idiomas',
      descripcion: 'Conversaciones en inglés para mejorar tu fluidez.',
      tipo: 'languages',
      fondoEtiqueta: '#DCFCE7',
      colorEtiqueta: '#166534',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Mis habilidades"
        subtitle="Gestiona tus habilidades"
        showBack={true}
      />

      {/* Contenido */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Botón Agregar Habilidad */}
          <Button
            title="Agregar habilidad"
            icon={<Text style={estilos.iconoMasBoton}>＋</Text>}
            style={estilos.botonAgregar}
          />

          {/* Tarjetas de Habilidades */}
          {habilidades.map((habilidad) => (
            <View key={habilidad.id} style={estilos.tarjetaHabilidad}>
              <CategoryIcon type={habilidad.tipo} size={50} />

              <View style={estilos.infoHabilidad}>
                <View style={estilos.filaAccionesTitulo}>
                  <Text style={estilos.tituloHabilidad}>{habilidad.titulo}</Text>
                  <View style={estilos.grupoAcciones}>
                    <TouchableOpacity style={estilos.botonIconoAccion}>
                      <Text style={estilos.iconoEditar}>✏️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botonIconoAccion}>
                      <Text style={estilos.iconoEliminar}>🗑️</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={[
                    estilos.etiquetaCategoria,
                    { backgroundColor: habilidad.fondoEtiqueta },
                  ]}
                >
                  <Text
                    style={[
                      estilos.textoEtiquetaCategoria,
                      { color: habilidad.colorEtiqueta },
                    ]}
                  >
                    {habilidad.categoria}
                  </Text>
                </View>

                <Text style={estilos.descHabilidad}>{habilidad.descripcion}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Navegación inferior Participante */}
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
  botonAgregar: {
    marginBottom: spacing.lg,
  },
  iconoMasBoton: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
  tarjetaHabilidad: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  infoHabilidad: {
    flex: 1,
    marginLeft: spacing.md,
  },
  filaAccionesTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tituloHabilidad: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  grupoAcciones: {
    flexDirection: 'row',
    gap: 8,
  },
  botonIconoAccion: {
    padding: 2,
  },
  iconoEditar: {
    fontSize: 14,
  },
  iconoEliminar: {
    fontSize: 14,
  },
  etiquetaCategoria: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    marginTop: 4,
    marginBottom: 6,
  },
  textoEtiquetaCategoria: {
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  descHabilidad: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    lineHeight: 16,
  },
});