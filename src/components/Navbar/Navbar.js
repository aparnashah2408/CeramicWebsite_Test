import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/sag.jpg";
import logo from "../../images/sag.jpg";
import "./Nav.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container my-1">
        <Link to="/" className="navbar-brand text-light font-weight-light">
        {/* <svg width="118" height="33" viewBox="0 0 118 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.4805 14.7812C34.3867 16.1016 34.0391 17.5195 33.4375 19.0352C32.875 20.4492 32.3203 21.4141 31.7734 21.9297C31.4609 22.2188 31.1445 22.3633 30.8242 22.3633C30.4648 22.3633 29.8672 22.0742 29.0312 21.4961C28.8672 21.3867 28.7852 21.2734 28.7852 21.1562C28.7852 21.0078 28.8906 20.9336 29.1016 20.9336C29.1875 20.9336 29.3125 20.9609 29.4766 21.0156C29.6406 21.0703 29.7734 21.0977 29.875 21.0977C30.4453 21.0977 30.957 20.7344 31.4102 20.0078C31.793 19.3828 32.1562 18.543 32.5 17.4883C32.9141 16.1758 33.0938 15.0469 33.0391 14.1016C33.0156 13.6484 32.8633 13.4219 32.582 13.4219C32.332 13.4219 32.0273 13.5938 31.668 13.9375C29.1367 16.3594 27.3555 19.2539 26.3242 22.6211C25.7383 24.5352 25.3477 26.3086 25.1523 27.9414C25.1445 27.9961 25.0391 29.3516 24.8359 32.0078C24.8047 32.3906 24.7109 32.582 24.5547 32.582C24.3906 32.582 24.0977 32.3906 23.6758 32.0078C23.3711 31.7266 23.2539 31.3828 23.3242 30.9766C23.668 27.0859 24.6094 22.7539 26.1484 17.9805C27.3594 14.2461 28.3203 11.8242 29.0312 10.7148C29.4531 10.0664 29.8281 9.75 30.1562 9.76562C30.4844 9.77344 31.1094 10.0664 32.0312 10.6445C32.1562 10.7227 32.2188 10.8047 32.2188 10.8906C32.2188 11.0078 32.125 11.0664 31.9375 11.0664C31.8906 11.0664 31.8125 11.0586 31.7031 11.043C31.5938 11.0195 31.5117 11.0078 31.457 11.0078C30.9648 11.0078 30.4531 11.4258 29.9219 12.2617C29.6094 12.7383 29.2148 13.5391 28.7383 14.6641C28.2617 15.7891 27.918 16.7148 27.707 17.4414C28.8555 15.5664 30.1914 13.957 31.7148 12.6133C31.9492 12.4102 32.1602 12.3086 32.3477 12.3086C32.4336 12.3086 32.6484 12.4258 32.9922 12.6602C34.0547 13.0352 34.5508 13.7422 34.4805 14.7812ZM43.5508 14.1953C42.832 16.1875 42.3359 17.8594 42.0625 19.2109C42.1797 19.1016 42.332 18.9336 42.5195 18.707C42.7148 18.4805 42.8359 18.3477 42.8828 18.3086C42.9922 18.168 43.1094 18.0977 43.2344 18.0977C43.3516 18.0977 43.4102 18.1562 43.4102 18.2734C43.4102 18.3438 43.3789 18.4258 43.3164 18.5195C42.582 19.6055 42.0938 20.7031 41.8516 21.8125C41.7812 22.125 41.6758 22.2812 41.5352 22.2812C41.4023 22.2812 41.1562 22.1562 40.7969 21.9062C40.5859 21.7656 40.4648 21.6484 40.4336 21.5547C40.3945 21.4688 40.3945 21.2969 40.4336 21.0391C40.7617 19.0547 41.1719 17.4062 41.6641 16.0938C40.9844 17.1953 40.0586 18.4141 38.8867 19.75C37.8633 20.9141 37.125 21.6562 36.6719 21.9766C36.3438 22.2031 36.0938 22.3164 35.9219 22.3164C35.7812 22.3164 35.5664 22.2031 35.2773 21.9766C34.8633 21.7266 34.6562 21.3828 34.6562 20.9453C34.6562 20.8594 34.6641 20.7617 34.6797 20.6523C34.8203 19.4961 35.3281 18.1523 36.2031 16.6211C37.0781 15.082 38.082 13.7852 39.2148 12.7305C39.582 12.3867 39.9102 12.2188 40.1992 12.2266C40.4805 12.2422 41.0156 12.6133 41.8047 13.3398C41.875 13.4023 41.9102 13.4688 41.9102 13.5391C41.9102 13.6641 41.8281 13.7266 41.6641 13.7266C41.6016 13.7266 41.543 13.7148 41.4883 13.6914C40.9336 13.457 40.4883 13.4648 40.1523 13.7148C39.418 14.2539 38.6055 15.2031 37.7148 16.5625C36.6836 18.125 36.0625 19.5312 35.8516 20.7812C35.8438 20.8359 35.8398 20.8867 35.8398 20.9336C35.8398 21.1289 35.918 21.2266 36.0742 21.2266C36.3398 21.2266 36.6562 21.043 37.0234 20.6758C37.8984 19.8242 38.8359 18.7539 39.8359 17.4648C40.8594 16.1289 41.5156 15.1211 41.8047 14.4414C42.0156 13.9414 42.1523 13.5898 42.2148 13.3867C42.3164 13.0352 42.4258 12.8594 42.543 12.8594C42.6602 12.8594 42.9336 13.0195 43.3633 13.3398C43.543 13.4727 43.6406 13.5938 43.6562 13.7031C43.6719 13.7969 43.6367 13.9609 43.5508 14.1953ZM52.1406 13.1875C52.1406 14.2109 52.0039 15.1875 51.7305 16.1172C51.6445 16.3984 51.5273 16.5391 51.3789 16.5391C51.2695 16.5391 51.0273 16.3828 50.6523 16.0703C50.4648 15.9141 50.418 15.6914 50.5117 15.4023C50.7305 14.6914 50.8398 14.1211 50.8398 13.6914C50.8398 13.543 50.8086 13.4688 50.7461 13.4688C50.6523 13.4688 50.5 13.6094 50.2891 13.8906C48.6641 16.0078 47.4492 18.3828 46.6445 21.0156C46.3867 21.8516 46.168 22.2695 45.9883 22.2695C45.918 22.2695 45.6094 22.1328 45.0625 21.8594C44.7969 21.7266 44.707 21.4688 44.793 21.0859C45.4102 18.3828 46.0742 16.1016 46.7852 14.2422C46.207 14.8516 45.8398 15.2695 45.6836 15.4961C45.6211 15.5898 45.5352 15.6367 45.4258 15.6367C45.293 15.6367 45.2266 15.5781 45.2266 15.4609C45.2266 15.3906 45.2578 15.3125 45.3203 15.2266C45.7031 14.7656 46.2148 14.0625 46.8555 13.1172C47.0508 12.7734 47.2461 12.6016 47.4414 12.6016C47.582 12.6016 47.8672 12.7109 48.2969 12.9297C48.5391 13.0547 48.5781 13.2227 48.4141 13.4336C48.2422 13.6602 47.918 14.4609 47.4414 15.8359C46.9883 17.1719 46.6758 18.2188 46.5039 18.9766C47.5664 16.6094 48.7734 14.5195 50.125 12.707C50.3828 12.3633 50.5898 12.1914 50.7461 12.1914C50.8867 12.1914 51.0781 12.2852 51.3203 12.4727C51.6484 12.5117 51.8555 12.5625 51.9414 12.625C52.0742 12.7188 52.1406 12.9062 52.1406 13.1875ZM61.1758 17.8281C60.707 18.5391 60.0977 19.5703 59.3477 20.9219C59.207 21.2734 59.0703 21.625 58.9375 21.9766C58.8281 22.2188 58.6836 22.3398 58.5039 22.3398C58.3633 22.3398 58.1562 22.2812 57.8828 22.1641C57.5781 22.0391 57.4258 21.9141 57.4258 21.7891C57.4258 21.7344 57.4766 21.6133 57.5781 21.4258C58.0859 20.3945 58.5391 19.1094 58.9375 17.5703C59.3672 15.9531 59.5508 14.7188 59.4883 13.8672C59.4727 13.5234 59.3945 13.3516 59.2539 13.3516C59.1523 13.3516 59 13.4492 58.7969 13.6445C56.8281 15.5664 55.125 18.1367 53.6875 21.3555C53.5078 21.7539 53.2969 21.9531 53.0547 21.9531C52.8828 21.9531 52.5977 21.8555 52.1992 21.6602C52.043 21.5898 51.9609 21.5234 51.9531 21.4609C51.9531 21.4297 51.9961 21.3203 52.082 21.1328C52.5352 20.1406 52.9844 18.8828 53.4297 17.3594C53.9062 15.7109 54.1758 14.4258 54.2383 13.5039C54.2539 13.2227 54.2461 13.082 54.2148 13.082C54.207 13.082 54.0977 13.1875 53.8867 13.3984C53.6758 13.6094 53.3828 13.8828 53.0078 14.2188C52.9375 14.2891 52.8594 14.3242 52.7734 14.3242C52.6641 14.3242 52.6094 14.2812 52.6094 14.1953C52.6094 14.1328 52.6484 14.0625 52.7266 13.9844C53.0625 13.5547 53.5039 13.0195 54.0508 12.3789C54.168 12.2461 54.2891 12.1797 54.4141 12.1797C54.6016 12.1797 54.7656 12.3164 54.9062 12.5898C55.5391 12.7773 55.8359 13.0664 55.7969 13.457C55.7109 14.3164 55.2695 15.8672 54.4727 18.1094C54.9961 17.1016 55.7578 15.9766 56.7578 14.7344C57.7578 13.4844 58.5 12.7461 58.9844 12.5195C59.2266 12.4102 59.3984 12.3555 59.5 12.3555C59.6016 12.3555 59.7656 12.4414 59.9922 12.6133C60.6406 12.8398 60.9609 13.2148 60.9531 13.7383C60.9531 14.2852 60.8203 15.1641 60.5547 16.375C60.3438 17.375 60.1484 18.1523 59.9688 18.707C60.1953 18.418 60.4844 18.043 60.8359 17.582C60.8984 17.5039 60.9609 17.4648 61.0234 17.4648C61.1406 17.4648 61.1992 17.5391 61.1992 17.6875C61.1992 17.7344 61.1914 17.7812 61.1758 17.8281ZM70.5273 14.1953C69.8086 16.1875 69.3125 17.8594 69.0391 19.2109C69.1562 19.1016 69.3086 18.9336 69.4961 18.707C69.6914 18.4805 69.8125 18.3477 69.8594 18.3086C69.9688 18.168 70.0859 18.0977 70.2109 18.0977C70.3281 18.0977 70.3867 18.1562 70.3867 18.2734C70.3867 18.3438 70.3555 18.4258 70.293 18.5195C69.5586 19.6055 69.0703 20.7031 68.8281 21.8125C68.7578 22.125 68.6523 22.2812 68.5117 22.2812C68.3789 22.2812 68.1328 22.1562 67.7734 21.9062C67.5625 21.7656 67.4414 21.6484 67.4102 21.5547C67.3711 21.4688 67.3711 21.2969 67.4102 21.0391C67.7383 19.0547 68.1484 17.4062 68.6406 16.0938C67.9609 17.1953 67.0352 18.4141 65.8633 19.75C64.8398 20.9141 64.1016 21.6562 63.6484 21.9766C63.3203 22.2031 63.0703 22.3164 62.8984 22.3164C62.7578 22.3164 62.543 22.2031 62.2539 21.9766C61.8398 21.7266 61.6328 21.3828 61.6328 20.9453C61.6328 20.8594 61.6406 20.7617 61.6562 20.6523C61.7969 19.4961 62.3047 18.1523 63.1797 16.6211C64.0547 15.082 65.0586 13.7852 66.1914 12.7305C66.5586 12.3867 66.8867 12.2188 67.1758 12.2266C67.457 12.2422 67.9922 12.6133 68.7812 13.3398C68.8516 13.4023 68.8867 13.4688 68.8867 13.5391C68.8867 13.6641 68.8047 13.7266 68.6406 13.7266C68.5781 13.7266 68.5195 13.7148 68.4648 13.6914C67.9102 13.457 67.4648 13.4648 67.1289 13.7148C66.3945 14.2539 65.582 15.2031 64.6914 16.5625C63.6602 18.125 63.0391 19.5312 62.8281 20.7812C62.8203 20.8359 62.8164 20.8867 62.8164 20.9336C62.8164 21.1289 62.8945 21.2266 63.0508 21.2266C63.3164 21.2266 63.6328 21.043 64 20.6758C64.875 19.8242 65.8125 18.7539 66.8125 17.4648C67.8359 16.1289 68.4922 15.1211 68.7812 14.4414C68.9922 13.9414 69.1289 13.5898 69.1914 13.3867C69.293 13.0352 69.4023 12.8594 69.5195 12.8594C69.6367 12.8594 69.9102 13.0195 70.3398 13.3398C70.5195 13.4727 70.6172 13.5938 70.6328 13.7031C70.6484 13.7969 70.6133 13.9609 70.5273 14.1953ZM98.4062 3.8125C98.5078 3.89063 98.5586 3.97656 98.5586 4.07031C98.5586 4.21094 98.4688 4.28125 98.2891 4.28125C98.2109 4.28125 98.1289 4.25781 98.043 4.21094C97.6836 4.03125 97.4141 3.94141 97.2344 3.94141C96.7578 3.94141 96.2266 4.41797 95.6406 5.37109C93.5781 8.73047 92.0508 13.1289 91.0586 18.5664C92.332 16.1211 93.7891 14.168 95.4297 12.707C95.7812 12.3945 96.0391 12.2383 96.2031 12.2383C96.25 12.2383 96.4453 12.3477 96.7891 12.5664C97.2031 12.7383 97.4375 12.8477 97.4922 12.8945C97.6953 13.0742 97.7969 13.3867 97.7969 13.832C97.7969 13.957 97.7891 14.0938 97.7734 14.2422C97.6406 15.6328 97.2422 17.3164 96.5781 19.293C96.8203 18.9648 97.2031 18.4844 97.7266 17.8516C97.8516 17.7188 97.957 17.6523 98.043 17.6523C98.1289 17.6523 98.1719 17.7031 98.1719 17.8047C98.1719 17.9219 98.1211 18.0547 98.0195 18.2031C97.5664 18.8594 96.9648 19.8203 96.2148 21.0859C96.1523 21.2109 96 21.5391 95.7578 22.0703C95.6562 22.3203 95.5156 22.4453 95.3359 22.4453C95.1328 22.4453 94.8398 22.3086 94.457 22.0352C94.3008 21.9258 94.2734 21.7539 94.375 21.5195C95.7188 18.1445 96.4297 15.625 96.5078 13.9609C96.5312 13.4844 96.4648 13.2461 96.3086 13.2461C96.207 13.2461 95.9922 13.3789 95.6641 13.6445C95.0625 14.1289 94.3242 14.9883 93.4492 16.2227C92.293 17.8477 91.3984 19.5078 90.7656 21.2031C90.5938 21.6875 90.4336 21.9297 90.2852 21.9297C90.1523 21.9297 89.8906 21.7695 89.5 21.4492C89.3047 21.2852 89.2383 21.0117 89.3008 20.6289C90.207 15.668 91.3867 11.4297 92.8398 7.91406C93.918 5.29688 94.8906 3.58594 95.7578 2.78125C95.9766 2.57813 96.1914 2.47656 96.4023 2.47656C96.6211 2.47656 96.8984 2.60156 97.2344 2.85156C97.625 3.17187 98.0156 3.49219 98.4062 3.8125ZM107.254 14.1953C106.535 16.1875 106.039 17.8594 105.766 19.2109C105.883 19.1016 106.035 18.9336 106.223 18.707C106.418 18.4805 106.539 18.3477 106.586 18.3086C106.695 18.168 106.812 18.0977 106.938 18.0977C107.055 18.0977 107.113 18.1562 107.113 18.2734C107.113 18.3438 107.082 18.4258 107.02 18.5195C106.285 19.6055 105.797 20.7031 105.555 21.8125C105.484 22.125 105.379 22.2812 105.238 22.2812C105.105 22.2812 104.859 22.1562 104.5 21.9062C104.289 21.7656 104.168 21.6484 104.137 21.5547C104.098 21.4688 104.098 21.2969 104.137 21.0391C104.465 19.0547 104.875 17.4062 105.367 16.0938C104.688 17.1953 103.762 18.4141 102.59 19.75C101.566 20.9141 100.828 21.6562 100.375 21.9766C100.047 22.2031 99.7969 22.3164 99.625 22.3164C99.4844 22.3164 99.2695 22.2031 98.9805 21.9766C98.5664 21.7266 98.3594 21.3828 98.3594 20.9453C98.3594 20.8594 98.3672 20.7617 98.3828 20.6523C98.5234 19.4961 99.0312 18.1523 99.9062 16.6211C100.781 15.082 101.785 13.7852 102.918 12.7305C103.285 12.3867 103.613 12.2188 103.902 12.2266C104.184 12.2422 104.719 12.6133 105.508 13.3398C105.578 13.4023 105.613 13.4688 105.613 13.5391C105.613 13.6641 105.531 13.7266 105.367 13.7266C105.305 13.7266 105.246 13.7148 105.191 13.6914C104.637 13.457 104.191 13.4648 103.855 13.7148C103.121 14.2539 102.309 15.2031 101.418 16.5625C100.387 18.125 99.7656 19.5312 99.5547 20.7812C99.5469 20.8359 99.543 20.8867 99.543 20.9336C99.543 21.1289 99.6211 21.2266 99.7773 21.2266C100.043 21.2266 100.359 21.043 100.727 20.6758C101.602 19.8242 102.539 18.7539 103.539 17.4648C104.562 16.1289 105.219 15.1211 105.508 14.4414C105.719 13.9414 105.855 13.5898 105.918 13.3867C106.02 13.0352 106.129 12.8594 106.246 12.8594C106.363 12.8594 106.637 13.0195 107.066 13.3398C107.246 13.4727 107.344 13.5938 107.359 13.7031C107.375 13.7969 107.34 13.9609 107.254 14.1953ZM117.789 3.8125C117.891 3.89063 117.941 3.97656 117.941 4.07031C117.941 4.21094 117.852 4.28125 117.672 4.28125C117.594 4.28125 117.512 4.25781 117.426 4.21094C117.066 4.03125 116.797 3.94141 116.617 3.94141C116.141 3.94141 115.609 4.41797 115.023 5.37109C112.961 8.73047 111.434 13.1289 110.441 18.5664C111.715 16.1211 113.172 14.168 114.812 12.707C115.164 12.3945 115.422 12.2383 115.586 12.2383C115.633 12.2383 115.828 12.3477 116.172 12.5664C116.586 12.7383 116.82 12.8477 116.875 12.8945C117.078 13.0742 117.18 13.3867 117.18 13.832C117.18 13.957 117.172 14.0938 117.156 14.2422C117.023 15.6328 116.625 17.3164 115.961 19.293C116.203 18.9648 116.586 18.4844 117.109 17.8516C117.234 17.7188 117.34 17.6523 117.426 17.6523C117.512 17.6523 117.555 17.7031 117.555 17.8047C117.555 17.9219 117.504 18.0547 117.402 18.2031C116.949 18.8594 116.348 19.8203 115.598 21.0859C115.535 21.2109 115.383 21.5391 115.141 22.0703C115.039 22.3203 114.898 22.4453 114.719 22.4453C114.516 22.4453 114.223 22.3086 113.84 22.0352C113.684 21.9258 113.656 21.7539 113.758 21.5195C115.102 18.1445 115.812 15.625 115.891 13.9609C115.914 13.4844 115.848 13.2461 115.691 13.2461C115.59 13.2461 115.375 13.3789 115.047 13.6445C114.445 14.1289 113.707 14.9883 112.832 16.2227C111.676 17.8477 110.781 19.5078 110.148 21.2031C109.977 21.6875 109.816 21.9297 109.668 21.9297C109.535 21.9297 109.273 21.7695 108.883 21.4492C108.688 21.2852 108.621 21.0117 108.684 20.6289C109.59 15.668 110.77 11.4297 112.223 7.91406C113.301 5.29688 114.273 3.58594 115.141 2.78125C115.359 2.57813 115.574 2.47656 115.785 2.47656C116.004 2.47656 116.281 2.60156 116.617 2.85156C117.008 3.17187 117.398 3.49219 117.789 3.8125Z" fill="white"/>
<path d="M78.37 12.71C77.25 12.33 76.42 11.76 75.88 11C75.34 10.24 75.07 9.2 75.07 7.88C75.07 6.04 75.77 4.57 77.17 3.47C78.57 2.35 79.99 1.79 81.43 1.79C82.89 1.79 84.17 2.12 85.27 2.78C86.39 3.42 86.95 4.3 86.95 5.42C86.95 6.1 86.74 6.62 86.32 6.98C85.9 7.34 85.39 7.52 84.79 7.52C84.21 7.52 83.74 7.36 83.38 7.04C83.04 6.7 82.87 6.39 82.87 6.11C82.87 5.81 82.92 5.66 83.02 5.66C83.14 5.66 83.24 5.73 83.32 5.87C83.4 5.99 83.47 6.13 83.53 6.29C83.69 6.71 84.03 6.92 84.55 6.92C85.09 6.92 85.51 6.79 85.81 6.53C86.13 6.27 86.29 5.9 86.29 5.42C86.29 4.54 85.8 3.82 84.82 3.26C83.84 2.7 82.73 2.42 81.49 2.42C80.25 2.42 79.09 2.8 78.01 3.56C76.93 4.32 76.39 5.28 76.39 6.44C76.39 7.22 76.66 7.87 77.2 8.39C77.76 8.89 78.38 9.25 79.06 9.47C79.76 9.69 80.66 9.95 81.76 10.25C82.88 10.55 83.75 10.84 84.37 11.12C86.53 12.08 87.61 13.81 87.61 16.31C87.61 17.57 87.37 18.68 86.89 19.64C86.43 20.6 85.84 21.33 85.12 21.83C83.7 22.79 82.27 23.27 80.83 23.27C79.51 23.27 78.15 22.86 76.75 22.04C76.07 21.64 75.51 21.08 75.07 20.36C74.63 19.64 74.41 18.8 74.41 17.84C74.41 16.86 74.67 16.15 75.19 15.71C75.73 15.25 76.2 15.02 76.6 15.02C77.02 15.02 77.38 15.11 77.68 15.29C77.98 15.47 78.13 15.67 78.13 15.89C78.13 16.11 78.08 16.22 77.98 16.22C77.88 16.22 77.8 16.19 77.74 16.13C77.7 16.07 77.66 16 77.62 15.92C77.48 15.72 77.15 15.62 76.63 15.62C76.13 15.62 75.72 15.84 75.4 16.28C75.1 16.7 74.95 17.24 74.95 17.9C74.95 19.34 75.56 20.5 76.78 21.38C78 22.24 79.31 22.67 80.71 22.67C82.63 22.67 84.16 22.02 85.3 20.72C85.96 19.94 86.29 18.94 86.29 17.72C86.29 16.5 85.87 15.59 85.03 14.99C84.21 14.37 83.05 13.89 81.55 13.55C80.05 13.19 78.99 12.91 78.37 12.71Z" fill="#FF9600"/>
<path d="M8.15 18.55L13.73 2.29C14.05 1.41 14.25 0.969999 14.33 0.969999C14.49 0.969999 14.77 1.52 15.17 2.62L21.68 19.9C21.9 20.54 22.4 20.86 23.18 20.86C23.64 20.86 23.98 20.68 24.2 20.32C24.28 20.18 24.36 20.04 24.44 19.9C24.52 19.74 24.58 19.66 24.62 19.66C24.8 19.66 24.89 19.78 24.89 20.02C24.89 20.26 24.58 20.69 23.96 21.31C23.34 21.93 22.48 22.24 21.38 22.24C20 22.24 19.08 21.63 18.62 20.41L16.79 15.52H9.8L8.57 19.09C8.15 20.31 7.63 21.16 7.01 21.64C6.41 22.1 5.66 22.33 4.76 22.33C3.56 22.33 2.6 21.88 1.88 20.98C1.16 20.08 0.8 19.11 0.8 18.07C0.8 17.01 1.07 16.16 1.61 15.52C2.13 14.88 2.81 14.56 3.65 14.56C4.05 14.56 4.47 14.68 4.91 14.92C5.57 15.28 5.9 15.66 5.9 16.06C5.9 16.22 5.85 16.3 5.75 16.3C5.67 16.3 5.53 16.2 5.33 16C4.75 15.42 4.14 15.13 3.5 15.13C2.86 15.13 2.35 15.41 1.97 15.97C1.59 16.53 1.4 17.27 1.4 18.19C1.4 19.09 1.74 19.91 2.42 20.65C3.1 21.39 3.87 21.76 4.73 21.76C5.59 21.76 6.26 21.54 6.74 21.1C7.24 20.64 7.71 19.79 8.15 18.55ZM13.16 5.74L9.98 14.95H16.58L13.16 5.74Z" fill="#FF9600"/>
</svg> */}
{/* <h3 className="text-dark"> Ceramics Name</h3> */}
<img src={logo} className="logo"></img>

        </Link>
        <Link to="/contact" className="ml-auto mx-3">
        <button className="btn btn-outline-primary font ">
          Contact me
        </button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#collapseNav"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <Link to="/AllProjects" className="nav-item nav-link text-dark h6 mx-1 font my-auto">
              Products
            </Link>
            <Link to="/AllBlogs" className="nav-item nav-link font text-dark h6 mx-1 my-auto">
              About Us
            </Link>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;