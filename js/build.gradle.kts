plugins {
    kotlin("js")
}

group = "com.yt8492"
version = "1.0.0"

repositories {
    mavenCentral()
}

dependencies {
    implementation(project(":common"))
    implementation(kotlin("stdlib-js"))
    implementation(npm("webpack-node-externals", "2.5.1"))
}

kotlin {
    js(IR) {
        browser {
            webpackTask {
                outputFileName = "main.js"
            }
        }
        binaries.executable()
    }
}
