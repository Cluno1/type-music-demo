import{m as d,s as c,n as g,y as m}from"./index-Dk3O8imR.js";const p=d("radioStore",()=>{const e=c(),a=g({radioId:0,user:{userName:"",userId:0}});async function r(i){console.log("come into initRadioConn -- radioStore - 17");let s=new RTCPeerConnection;m(()=>e.messageRespond.on,async o=>{if(o&&e.messageRespond.fromUser.userId==a.user.userId){if(e.messageRespond.on=!1,e.messageRespond.message.service=="iceCandidate")console.log("receive ice"),s.addIceCandidate(JSON.parse(e.messageRespond.message.data));else if(e.messageRespond.message.service=="sdp"){console.log("receive sdp"),s.setRemoteDescription(JSON.parse(e.messageRespond.message.data));const n=await s.createAnswer();s.setLocalDescription(n),s.addEventListener("icecandidate",t=>{t.candidate&&(console.log("ready to send ice --21"),e.sendMessage({service:"iceCandidate",to:"",data:JSON.stringify(t.candidate),from:""},[a.user]))}),s.addEventListener("icecandidateerror",t=>{console.error("ICE candidate error:",t)}),s.addEventListener("icegatheringstatechange",()=>{console.log("ICE gathering state changed:",s.iceGatheringState)}),e.sendMessage({service:"sdp",to:"",data:JSON.stringify(n),from:""},[a.user])}}}),s.addEventListener("track",o=>{console.log("yes is come to remoteVideo 挂载 --64"),o.streams.length>0&&(i.srcObject=o.streams[0])})}return{radio:a,initRadioConn:r}});export{p as u};
