pipeline {
    agent any
stages {
   stage('Pull code') {
       steps {
           checkout scm
       }
   }
   stage('Download backend dependency') {
       steps {
           dir('backend') {
               sh 'npm install'
           }
       }
   }
   stage('Run unit test') {
        steps {
              sh 'jest --coverage --forceExit --detectOpenHandles'
        }
   }    
   stage('Deployment') {
        steps{
            echo "pass"
        }       
      }
          
   }
 }
