const APP_ID='4e7d500f47b44deba9c699152265a3b3'
const CHANNEL='main'
const TOKEN='007eJxTYNh2NymQ/Uxr6DTHqXkKcb+kfVzYL35/tCXZ2JM9wk/BeIECg0mqeYqpgUGaiXmSiUlKalKiZbKZpaWhqZGRmWmicZLxRHXxlIZARobNThNYGRkgEMRnYchNzMxjYAAArbkctQ=='
let UID;
const client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})

let localTracks=[]
let remoteUsers={}

let joinAndDisplayLocalStream=async()=>{
    UID=await client.join(APP_ID,CHANNEL,TOKEN,null)
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player='<div class="video-container" id="user-container-${UID}"><div class="username-wrapper"><span class="user-name">My Name:</span> <div class ="video-player" id="user-${UID}"></div></div></div>'

    document.getElementById('video-streams').insertAdjacentHTML('beforeend',player)
    
    localTracks[1].play(`user-${UID}`)
    await client.publish([localTracks[0],localTracks[1]])
}
joinAndDisplayLocalStream()