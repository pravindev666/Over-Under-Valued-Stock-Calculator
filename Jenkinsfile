pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t mathew666/nifty-range-calc .'
                }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    // Log in to Docker Hub
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    // Push the image
                    sh 'docker push mathew666/nifty-range-calc:latest'
                }
            }
        }
    }
}
