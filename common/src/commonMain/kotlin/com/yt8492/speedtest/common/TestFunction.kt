package com.yt8492.speedtest.common

import kotlin.random.Random

fun testFunction() {
    println("start")
    val randomArray = IntArray(5000000) {
        Random.nextInt()
    }
    val compareCount = randomArray.mergeSort()
    println("Compare Count: $compareCount")
    println("end")
}
