import React from "react";
import s from "./Rocket.module.css"

export default function Rocket() {
  return (
    <>
      <svg
      className={s.rocket}
        focusable="false"
        viewBox="0 0 512 512"
        aria-hidden="true"
        height="511pt"
        width="511pt"
      >
        <path
          d="m157.085938 266.195312c-.324219 0-.648438-.011718-.976563-.03125l-140.960937-8.800781c-5.363282-.332031-10.175782-3.398437-12.746094-8.113281-2.566406-4.714844-2.535156-10.421875.089844-15.109375.738281-1.320313 18.503906-32.644531 52.335937-59.964844 45.71875-36.914062 98.867187-48.886719 153.695313-34.621093 4.550781 1.183593 8.324218 4.355468 10.277343 8.632812s1.875 9.207031-.214843 13.417969l-47.503907 95.902343c-2.648437 5.34375-8.089843 8.6875-13.996093 8.6875zm0 0"
          fill="#ff5b5b"
        ></path>
        <path
          d="m270.722656 512c-2.570312 0-5.140625-.632812-7.472656-1.90625-4.714844-2.570312-7.78125-7.378906-8.117188-12.742188l-8.796874-140.960937c-.390626-6.277344 3.019531-12.179687 8.65625-14.972656l95.902343-47.507813c4.214844-2.085937 9.140625-2.164062 13.417969-.210937 4.28125 1.949219 7.449219 5.726562 8.632812 10.277343 14.269532 54.828126 2.296876 107.976563-34.621093 153.695313-27.316407 33.832031-58.644531 51.59375-59.964844 52.335937-2.371094 1.328126-5.003906 1.992188-7.636719 1.992188zm0 0"
          fill="#ff193d"
        ></path>
        <path
          d="m487.441406 126.058594-101-101c-4.046875-4.046875-9.984375-5.554688-15.472656-3.933594-67.613281 20-123.117188 51.367188-164.980469 93.226562-8.730469 8.734376-17.117187 18.199219-24.921875 28.128907-22.695312 28.855469-41.652344 62.972656-56.339844 101.40625-9.355468 24.496093-16.972656 50.738281-22.640624 77.996093-9.898438 47.613282-10.429688 81.738282-10.449219 83.167969-.050781 4.207031 1.597656 8.261719 4.574219 11.238281 2.929687 2.929688 6.90625 4.574219 11.046874 4.574219h.191407c1.433593-.015625 35.558593-.546875 83.167969-10.445312 27.257812-5.667969 53.5-13.285157 78-22.644531 38.429687-14.6875 72.546874-33.640626 101.394531-56.332032 9.9375-7.808594 19.402343-16.195312 28.136719-24.929687 41.863281-41.863281 73.230468-97.367188 93.226562-164.980469 1.625-5.488281.113281-11.425781-3.933594-15.472656zm0 0"
          fill="#e1f1fa"
        ></path>
        <path
          d="m201.289062 386.882812-75.671874-75.671874c-5.585938-5.585938-14.464844-6.121094-20.683594-1.246094-4.832032 3.789062-9.429688 7.859375-13.664063 12.09375-52.652343 52.652344-54.28125 134.234375-54.324219 137.679687-.054687 4.210938 1.59375 8.265625 4.574219 11.242188 2.929688 2.933593 6.902344 4.578125 11.042969 4.578125.066406 0 .132812 0 .199219-.003906 3.445312-.042969 85.03125-1.671876 137.679687-54.324219 4.234375-4.234375 8.304688-8.832031 12.09375-13.664063 4.875-6.21875 4.339844-15.097656-1.246094-20.683594zm0 0"
          fill="#fff261"
        ></path>
        <path
          d="m125.933594 240.761719-46.425782 46.429687c-2.929687 2.925782-4.578124 6.898438-4.578124 11.042969 0 4.140625 1.648437 8.113281 4.578124 11.042969l123.714844 123.714844c2.925782 2.929687 6.898438 4.574218 11.042969 4.574218s8.113281-1.644531 11.042969-4.574218l46.425781-46.425782zm0 0"
          fill="#1b3b6b"
        ></path>
        <path
          d="m328.601562 231.550781c-12.726562 0-24.695312-4.957031-33.695312-13.957031-18.578125-18.578125-18.578125-48.804688 0-67.386719 9-9 20.96875-13.957031 33.695312-13.957031 12.726563 0 24.695313 4.957031 33.695313 13.957031s13.957031 20.964844 13.957031 33.695313c0 12.726562-4.957031 24.691406-13.957031 33.691406s-20.96875 13.957031-33.695313 13.957031zm0 0"
          fill="#06ccab"
        ></path>
        <path
          d="m328.597656 246.828125c-16.808594 0-32.609375-6.546875-44.492187-18.429687-24.535157-24.535157-24.535157-64.457032 0-88.992188 11.882812-11.882812 27.6875-18.429688 44.492187-18.429688 16.808594 0 32.609375 6.546876 44.496094 18.429688 11.886719 11.886719 18.429688 27.6875 18.429688 44.496094s-6.542969 32.609375-18.429688 44.496094c-11.886719 11.882812-27.6875 18.429687-44.496094 18.429687zm0-94.613281c-8.460937 0-16.421875 3.296875-22.40625 9.28125-12.351562 12.355468-12.351562 32.457031 0 44.8125 5.984375 5.984375 13.945313 9.28125 22.40625 9.28125 8.464844 0 16.421875-3.296875 22.40625-9.28125s9.28125-13.941406 9.28125-22.40625-3.296875-16.421875-9.28125-22.40625-13.941406-9.28125-22.40625-9.28125zm0 0"
          fill="#1b3b6b"
        ></path>
        <path
          d="m507.925781 4.578125c-2.980469-2.980469-7.058593-4.65625-11.246093-4.57421875-2.316407.02734375-57.53125.95703175-125.710938 21.12109375l120.40625 120.40625c20.164062-68.179688 21.09375-123.394531 21.121094-125.710938.054687-4.210937-1.59375-8.265624-4.570313-11.242187zm0 0"
          fill="#ff5b5b"
        ></path>
        <path
          d="m487.441406 126.058594-50.5-50.5-340.730468 340.730468c2.929687 2.929688 6.902343 4.574219 11.042968 4.574219h.195313c1.429687-.015625 35.554687-.546875 83.167969-10.445312 27.257812-5.667969 53.496093-13.285157 77.996093-22.644531 38.433594-14.6875 72.550781-33.640626 101.398438-56.332032 9.933593-7.808594 19.402343-16.195312 28.132812-24.929687 41.863281-41.863281 73.230469-97.367188 93.226563-164.980469 1.628906-5.488281.117187-11.425781-3.929688-15.472656zm0 0"
          fill="#cdebfc"
        ></path>
        <path
          d="m201.289062 386.882812-37.835937-37.835937-121.9375 121.933594v.003906c2.933594 2.929687 6.90625 4.574219 11.046875 4.574219h.195312c3.449219-.042969 85.03125-1.675782 137.683594-54.328125 4.234375-4.234375 8.304688-8.832031 12.089844-13.664063 4.878906-6.21875 4.347656-15.097656-1.242188-20.683594zm0 0"
          fill="#fdbf00"
        ></path>
        <path
          d="m198.835938 313.664062-57.472657 57.472657 61.859375 61.859375c2.925782 2.925781 6.898438 4.574218 11.042969 4.574218s8.113281-1.648437 11.042969-4.574218l46.425781-46.429688zm0 0"
          fill="#001035"
        ></path>
        <path
          d="m362.296875 150.207031c-.003906 0-.003906 0-.003906 0l-67.386719 67.386719h.003906c8.996094 9 20.964844 13.957031 33.691406 13.957031 12.726563 0 24.695313-4.957031 33.695313-13.957031s13.957031-20.964844 13.957031-33.691406c-.003906-12.726563-4.957031-24.695313-13.957031-33.695313zm0 0"
          fill="#1cadb5"
        ></path>
        <path
          d="m373.09375 139.40625-22.089844 22.089844c5.984375 5.984375 9.28125 13.941406 9.28125 22.40625s-3.296875 16.421875-9.28125 22.40625-13.941406 9.28125-22.40625 9.28125-16.421875-3.296875-22.40625-9.28125c0 0 0 0 0-.003906l-22.089844 22.089843v.003907c11.886719 11.882812 27.6875 18.429687 44.496094 18.429687s32.609375-6.546875 44.496094-18.429687c11.882812-11.886719 18.429688-27.6875 18.429688-44.496094s-6.546876-32.609375-18.429688-44.496094zm0 0"
          fill="#001035"
        ></path>
        <path
          d="m507.921875 4.574219-76.75 76.753906 60.203125 60.203125c20.164062-68.179688 21.09375-123.394531 21.121094-125.710938.054687-4.210937-1.59375-8.265624-4.574219-11.246093zm0 0"
          fill="#ff193d"
        ></path>
      </svg>
    </>
  );
}
