plugins {
    kotlin("multiplatform")
}

group = "com.yt8492"
version = "1.0.0"

repositories {
    mavenCentral()
}

kotlin {
    macosX64("macos")

    sourceSets {
        val macosMain by getting {
            dependencies {
                implementation(kotlin("stdlib-common"))
            }
        }
    }
}