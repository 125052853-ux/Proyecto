// Screen de cursos 

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
import CategoryIcon from '../components/CategoryIcon';
import BottomNav from '../components/BottomNav';

export default function CursosScreen() {
  const filtros = [
    { id: 'todos', etiqueta: 'Todos', seleccionado: true },
    { id: 'tec', etiqueta: 'Tecnología', seleccionado: false },
    { id: 'diseno', etiqueta: 'Diseño', seleccionado: false },
    { id: 'idiomas', etiqueta: 'Idiomas', seleccionado: false },
  ];

  const cursos = [
    {
      id: '1',
      titulo: 'Introducción a Python',
      categoria: 'Tecnología',
      instructor: 'Aaron C.',
      fechaHora: '12 oct · 5:00 pm',
      capacidad: 'Cupo 8/12',
      estaLleno: false,
      tipo: 'tech',
      fondoEtiqueta: '#EDE9FE',
      colorEtiqueta: '#6D28D9',
    },
    {
      id: '2',
      titulo: 'Diseño de logos desde cero',
      categoria: 'Diseño',
      instructor: 'Jorge B.',
      fechaHora: '14 oct · 6:00 pm',
      capacidad: 'Cupo 5/10',
      estaLleno: false,
      tipo: 'music', // Mantenido por compatibilidad con CategoryIcon
      fondoEtiqueta: '#FCE7F3',
      colorEtiqueta: '#9D174D',
    },
    {
      id: '3',
      titulo: 'Inglés para principiantes',
      categoria: 'Idiomas',
      instructor: 'Leonardo S.',
      fechaHora: '15 oct · 4:00 pm',
      capacidad: 'Cupo 10/10',
      estaLleno: true,
      tipo: 'languages', // Mantenido por compatibilidad con CategoryIcon
      fondoEtiqueta: '#DCFCE7',
      colorEtiqueta: '#166534',
    },
  ];

  return (
    <View style={globalStyles.screenContainer}>
      {/* Encabezado */}
      <Header
        title="Cursos"
        subtitle="Aprende en vivo con otros participantes"
        showBack={true}
      />

      {/* Contenido en ScrollView */}
      <View style={estilos.cuerpo}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={estilos.contenidoScroll}
        >
          {/* Barra de Búsqueda */}
          <View style={estilos.barraBusqueda}>
            <Text style={estilos.iconoBusqueda}>🔍</Text>
            <TextInput
              style={estilos.entradaBusqueda}
              placeholder="Buscar cursos..."
              placeholderTextColor={colors.textMuted}
            />
          </View>

          {/* Filtros de Categorías */}
          <View style={estilos.filaFiltros}>
            {filtros.map((filtro) => (
              <TouchableOpacity
                key={filtro.id}
                style={[
                  estilos.filtro,
                  filtro.seleccionado && estilos.filtroSeleccionado,
                ]}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    estilos.textoFiltro,
                    filtro.seleccionado && estilos.textoFiltroSeleccionado,
                  ]}
                >
                  {filtro.etiqueta}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tarjetas de Cursos */}
          {cursos.map((curso) => (
            <View key={curso.id} style={estilos.tarjetaCurso}>
              <View style={estilos.filaSuperiorTarjeta}>
                <CategoryIcon type={curso.tipo} size={48} />

                <View style={estilos.detallesCurso}>
                  <Text style={estilos.tituloCurso}>{curso.titulo}</Text>
                  <View
                    style={[
                      estilos.etiquetaCategoria,
                      { backgroundColor: curso.fondoEtiqueta },
                    ]}
                  >
                    <Text
                      style={[
                        estilos.textoEtiquetaCategoria,
                        { color: curso.colorEtiqueta },
                      ]}
                    >
                      {curso.categoria}
                    </Text>
                  </View>
                </View>

                {/* Insignia de Cupo */}
                <View
                  style={[
                    estilos.insigniaCupo,
                    curso.estaLleno ? estilos.insigniaCupoLleno : estilos.insigniaCupoDisponible,
                  ]}
                >
                  <Text
                    style={[
                      estilos.textoCupo,
                      curso.estaLleno ? estilos.textoCupoLleno : estilos.textoCupoDisponible,
                    ]}
                  >
                    {curso.capacidad}
                  </Text>
                </View>
              </View>

              {/* Info de Instructor y Horario + Botón */}
              <View style={estilos.filaInferiorTarjeta}>
                <View style={estilos.grupoMeta}>
                  <View style={estilos.filaInstructor}>
                    <Text style={{ fontSize: 12, marginRight: 4 }}>👤</Text>
                    <Text style={estilos.nombreInstructor}>{curso.instructor}</Text>
                  </View>
                  <Text style={estilos.textoFechaHora}>📅 {curso.fechaHora}</Text>
                </View>

                {curso.estaLleno ? (
                  <View style={estilos.botonLleno}>
                    <Text style={estilos.textoBotonLleno}>Cupo lleno</Text>
                  </View>
                ) : (
                  <TouchableOpacity style={estilos.botonInscribir} activeOpacity={0.8}>
                    <Text style={estilos.textoBotonInscribir}>Inscribirme</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Navegación inferior Participante */}
      <BottomNav role="participant" activeTab="Inicio" />
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
  barraBusqueda: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.2,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    marginBottom: spacing.md,
  },
  iconoBusqueda: {
    fontSize: 16,
    color: colors.textMuted,
    marginRight: 8,
  },
  entradaBusqueda: {
    flex: 1,
    fontSize: typography.fontSizes.sm,
    color: colors.textPrimary,
  },
  filaFiltros: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  filtro: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  filtroSeleccionado: {
    backgroundColor: '#DCE6F8',
    borderColor: '#B8CDF0',
  },
  textoFiltro: {
    fontSize: typography.fontSizes.xs,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  textoFiltroSeleccionado: {
    color: colors.primary,
    fontWeight: typography.fontWeights.bold,
  },
  tarjetaCurso: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  filaSuperiorTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detallesCurso: {
    flex: 1,
    marginLeft: spacing.md,
  },
  tituloCurso: {
    fontSize: typography.fontSizes.sm,
    fontWeight: typography.fontWeights.bold,
    color: colors.textPrimary,
  },
  etiquetaCategoria: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    marginTop: 4,
  },
  textoEtiquetaCategoria: {
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  insigniaCupo: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
  },
  insigniaCupoDisponible: {
    backgroundColor: '#DCFCE7',
  },
  textoCupoDisponible: {
    color: '#15803D',
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  insigniaCupoLleno: {
    backgroundColor: '#FCE7F3',
  },
  textoCupoLleno: {
    color: '#BE123C',
    fontSize: 10,
    fontWeight: typography.fontWeights.semiBold,
  },
  filaInferiorTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.xs,
  },
  grupoMeta: {
    flex: 1,
  },
  filaInstructor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nombreInstructor: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: typography.fontWeights.medium,
  },
  textoFechaHora: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 2,
  },
  botonInscribir: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
  },
  textoBotonInscribir: {
    color: colors.white,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.bold,
  },
  botonLleno: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderRadius: borderRadius.md,
  },
  textoBotonLleno: {
    color: colors.textSecondary,
    fontSize: typography.fontSizes.xs,
    fontWeight: typography.fontWeights.medium,
  },
});