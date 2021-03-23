pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node_1"
                    }
                    steps {
                        git url: 'https://github.com/YusufOzturk-Development/Cypress-Automation-Code_Samples.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-chrome'
                    }
                }
                     stage('Slave Node2') {
                    agent {
                        label "remote_node_2"
                    }
                    steps {
                        git url: 'https://github.com/YusufOzturk-Development/Cypress-Automation-Code_Samples.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-headless'
                    }
                }
            }
        }
    }
}