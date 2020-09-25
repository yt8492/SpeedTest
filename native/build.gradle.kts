plugins {
    kotlin("multiplatform")
}

group = "com.yt8492"
version = "1.0.0"

repositories {
    mavenCentral()
}

kotlin {
    macosX64("macos") {
        binaries {
            executable {
                entryPoint = "com.yt8492.speedtest.native.main"
            }
        }
    }

    sourceSets {
        val macosMain by getting {
            dependencies {
                implementation(project(":common"))
                implementation(kotlin("stdlib-common"))
            }
        }
    }
}