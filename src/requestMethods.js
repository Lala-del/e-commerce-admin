import axios from "axios"
import { useParams } from "react-router-dom"

const BASE_URL = "http://localhost:3001/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlua2FAZ21haWwuY29tIiwiaWF0IjoxNjQ5NDk1NzY2LCJleHAiOjE2NDk0OTkzNjYsInN1YiI6IjIifQ.bslAMChy-sxq3Zv9ER5_5UNJ-GRiijrhmZ-BmPMmHac"

console.log(TOKEN)


export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})