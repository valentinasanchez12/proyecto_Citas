pipeline {

 agent any

 stages {
 stage('Checkout') {
 steps {
 // Clonar el repositorio
 git 'https://github.com/valentinasanchez12/proyecto_Citas.git'
 }
 }

 stage('Install Dependencies') {
 steps {
 // Instalar dependencias con npm
 sh 'npm install'
 }
 }

 stage('Run Tests') {
 steps {
 // Ejecutar pruebas con npm test
 sh 'npm test'
 }
 }

 stage('Build') {
 steps {
 // Construir la aplicación con npm run build
 sh 'npm run build'
 }
 }

 stage('Deploy') {
 steps {
 // Desplegar la aplicación (puedes personalizar este paso según tus necesidades)
 // Ejemplo: copiar archivos al servidor de producción
 sh 'rsync -avz ./dist user@servidor:/ruta/destino'
 }
 }
 }
}
=======
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'comando-de-compilación'
            }
        }
        stage('Test') {
            steps {
                sh 'comando-de-prueba'
            }
        }
        stage('Deploy') {
            steps {
                sh 'comando-de-despliegue'
            }
        }
    }
}
