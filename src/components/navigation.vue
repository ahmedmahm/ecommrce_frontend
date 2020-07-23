<template>
    <ul>
        <li>
            <router-link
                :to="{name:'Home'}"
            >
                Home
            </router-link>
        </li>
        <li>
            <router-link
                    :to="{name:'signin'}"
            >
                Sign in
            </router-link>
        </li>
        <li>
            Hello Ahmed
        </li>
        <li>
            <router-link
                    :to="{name:'dashboard'}"
            >
                dashboard
            </router-link>
        </li>
        <li>
            <a href="#">Sign Out</a>
        </li>
    </ul>
</template>