
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate Portfolio') {
            steps {
                bat '''
                    @echo off
                    if not exist index.html exit /b 1
                    if not exist style.css exit /b 1
                    if not exist script.js exit /b 1
                    if not exist assets\\tushar.jpg exit /b 1

                    findstr /C:"<title>" index.html >nul
                    if errorlevel 1 exit /b 1

                    echo All portfolio files are present.
                    echo Portfolio validation successful.
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio validation succeeded!'
        }
        failure {
            echo 'Build failed. Check the Console Output.'
        }
    }
}
