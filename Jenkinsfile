node {
    def buildNumber = env.BUILD_NUMBER
    def workspace = env.WORKSPACE
    def buildUrl = env.BUILD_URL
    def imageRepo = "https://hub.docker.com/r/rafazzevedo/artilleryexamples"

    // PRINT ENVIRONMENT TO JOB
    echo "workspace directory is $workspace"
    echo "build URL is $buildUrl"
    echo "build Number is $buildNumber"
    echo "PATH is $env.PATH"

    properties([
        disableConcurrentBuilds(),
        parameters([
          choice(name: 'ENVIRONMENT', choices: "qa\ndev", description: 'Environment to run the tests')
        ])
    ])

    wrap([$class: 'AnsiColorBuildWrapper']) {
        stage('Performance Tests') {
            echo "Running Performance Tests on ${ENVIRONMENT}"
            sh "kubectl run performance-tests -i --rm --namespace=${ENVIRONMENT} --restart=Never --image=${imageRepo}:latest --image-pull-policy=Always -- endurance:jenkins:${ENVIRONMENT} | tee report"
            def report = readFile "report"
            def update = report.substring(report.indexOf('<html>'), report.indexOf('</html>'))
            writeFile file: "${workspace}/endurance-tests.html", text: update
            sh "rm report"
        }
    } 
}
