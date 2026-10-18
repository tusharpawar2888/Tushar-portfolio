pipeline {
    agent any
    options { timestamps(); disableConcurrentBuilds() }
    parameters {
        booleanParam(name: 'TRIGGER_RENDER_DEPLOY', defaultValue: false, description: 'Trigger Render after validation (requires the RENDER_DEPLOY_HOOK secret text credential).')
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Validate static site') {
            steps {
                sh '''
                    set -eu
                    test -s index.html
                    test -s style.css
                    test -s script.js
                    test -s assets/tushar.jpg
                    grep -q '<title>' index.html
                    grep -q 'style.css' index.html
                    grep -q 'script.js' index.html
                    echo "Portfolio file checks passed."
                '''
            }
        }
        stage('Trigger Render deploy (optional)') {
            when { expression { return params.TRIGGER_RENDER_DEPLOY } }
            steps {
                withCredentials([string(credentialsId: 'RENDER_DEPLOY_HOOK', variable: 'RENDER_DEPLOY_HOOK')]) {
                    sh 'curl --fail --silent --show-error -X POST "$RENDER_DEPLOY_HOOK"'
                }
            }
        }
    }
    post {
        success { echo 'Portfolio validation succeeded.' }
        failure { echo 'Portfolio validation failed. Review console output.' }
    }
}
