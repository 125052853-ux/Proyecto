/**
 * App.js
 */
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView, Button, Text, View } from 'react-native';
import { colors } from './styles/theme';

// Importación de todas las pantallas
import LoginScreen from './screens/LoginScreen';
import RegistrarScreen from './screens/RegistrarScreen';
import OlvidoContrasenaScreen from './screens/OlvidoContrasenaScreen';
import AdminUsuariosScreen from './screens/AdminUsuariosScreen';
import AdminCategoriasScreen from './screens/AdminCategoriasScreen';
import AgregarCategoriaScreen from './screens/AgregarCategoriaScreen';
import EditarCategoriaScreen from './screens/EditarCategoriaScreen';
import AdminReportesScreen from './screens/AdminReportesScreen';
import DescargarReportesScreen from './screens/DescargarReportesScreen';
import AdminPerfilScreen from './screens/AdminPerfilScreen';
import ParticipanteInicioScreen from './screens/ParticipanteInicioScreen';
import ParticipanteHabilidadesScreen from './screens/ParticipanteHabilidadesScreen';
import AgregarHabilidadScreen from './screens/AgregarHabilidadScreen';
import PublicarServicioScreen from './screens/PublicarServicioScreen';
import PedirServicioScreen from './screens/PedirServicioScreen';
import ConfirmarServicioScreenScreen from './screens/ConfirmarServicioScreen';
import GestionarSolicitudesScreen from './screens/GestionarSolicitudesScreen';
import ParticipantePerfilScreen from './screens/ParticipantePerfilScreen';
import CursosScreen from './screens/CursosScreen';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('Menu');

  const renderizarPantalla = () => {
    switch (pantallaActual) {
      case 'Login': return <LoginScreen />;
      case 'Registrar': return <RegistrarScreen />;
      case 'OlvidoContrasena': return <OlvidoContrasenaScreen />;
      case 'AdminUsuarios': return <AdminUsuariosScreen />;
      case 'AdminCategorias': return <AdminCategoriasScreen />;
      case 'AgregarCategoria': return <AgregarCategoriaScreen />;
      case 'EditarCategoria': return <EditarCategoriaScreen />;
      case 'AdminReportes': return <AdminReportesScreen />;
      case 'DescargarReportes': return <DescargarReportesScreen />;
      case 'AdminPerfil': return <AdminPerfilScreen />;
      case 'ParticipanteInicio': return <ParticipanteInicioScreen />;
      case 'ParticipanteHabilidades': return <ParticipanteHabilidadesScreen />;
      case 'AgregarHabilidad': return <AgregarHabilidadScreen />;
      case 'PublicarServicio': return <PublicarServicioScreen />;
      case 'PedirServicio': return <PedirServicioScreen />;
      case 'ConfirmarServicio': return <ConfirmarServicioScreenScreen />;
      case 'GestionarSolicitudes': return <GestionarSolicitudesScreen />;
      case 'ParticipantePerfil': return <ParticipantePerfilScreen />;
      case 'Cursos': return <CursosScreen />;
      default: return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors?.primary || '#000'} />
      
      {pantallaActual === 'Menu' ? (
        <ScrollView contentContainerStyle={styles.menuContainer}>
          <Text style={styles.title}>Menú Principal de Pantallas</Text>
          
          <View style={styles.buttonWrapper}><Button title="Login" onPress={() => setPantallaActual('Login')} /></View>
          <View style={styles.buttonWrapper}><Button title="Registrar" onPress={() => setPantallaActual('Registrar')} /></View>
          <View style={styles.buttonWrapper}><Button title="Olvidó Contraseña" onPress={() => setPantallaActual('OlvidoContrasena')} /></View>
          <View style={styles.buttonWrapper}><Button title="Admin Usuarios" onPress={() => setPantallaActual('AdminUsuarios')} /></View>
          <View style={styles.buttonWrapper}><Button title="Admin Categorías" onPress={() => setPantallaActual('AdminCategorias')} /></View>
          <View style={styles.buttonWrapper}><Button title="Agregar Categoría" onPress={() => setPantallaActual('AgregarCategoria')} /></View>
          <View style={styles.buttonWrapper}><Button title="Editar Categoría" onPress={() => setPantallaActual('EditarCategoria')} /></View>
          <View style={styles.buttonWrapper}><Button title="Admin Reportes" onPress={() => setPantallaActual('AdminReportes')} /></View>
          <View style={styles.buttonWrapper}><Button title="Descargar Reportes" onPress={() => setPantallaActual('DescargarReportes')} /></View>
          <View style={styles.buttonWrapper}><Button title="Admin Perfil" onPress={() => setPantallaActual('AdminPerfil')} /></View>
          <View style={styles.buttonWrapper}><Button title="Participante Inicio" onPress={() => setPantallaActual('ParticipanteInicio')} /></View>
          <View style={styles.buttonWrapper}><Button title="Participante Habilidades" onPress={() => setPantallaActual('ParticipanteHabilidades')} /></View>
          <View style={styles.buttonWrapper}><Button title="Agregar Habilidad" onPress={() => setPantallaActual('AgregarHabilidad')} /></View>
          <View style={styles.buttonWrapper}><Button title="Publicar Servicio" onPress={() => setPantallaActual('PublicarServicio')} /></View>
          <View style={styles.buttonWrapper}><Button title="Pedir Servicio" onPress={() => setPantallaActual('PedirServicio')} /></View>
          <View style={styles.buttonWrapper}><Button title="Confirmar Servicio" onPress={() => setPantallaActual('ConfirmarServicio')} /></View>
          <View style={styles.buttonWrapper}><Button title="Gestionar Solicitudes" onPress={() => setPantallaActual('GestionarSolicitudes')} /></View>
          <View style={styles.buttonWrapper}><Button title="Participante Perfil" onPress={() => setPantallaActual('ParticipantePerfil')} /></View>
          <View style={styles.buttonWrapper}><Button title="Cursos" onPress={() => setPantallaActual('Cursos')} /></View>
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <Button title="← Volver al Menú" onPress={() => setPantallaActual('Menu')} color="#666" />
          </View>
          {renderizarPantalla()}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors?.primary || '#f4f4f4', 
  },
  menuContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#eaeaea',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});