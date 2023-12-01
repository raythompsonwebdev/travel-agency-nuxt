<template>
    <div class="Contact">
      <button id="side-bar-btn" @click="contactFunction">Contact</button>
  
      <!--contact details box-->
      <aside v-if="contactFunction" id="contact-page-sidebar" class="hide">
        <address id="contact-details">
          <p class="addr-title" style="">Phone:</p>
          <a href="tel:123-436-7890" class="addr-link">123-436-7890 </a>
          <p class="addr-title">Mail :</p>
          <a href="mailto:info@travelagency.com" class="addr-link"
            >info@travelagency.com</a
          >
          <p class="addr-title">Address:</p>
          <p>Lorem Ipsum 1234 Dolo Sit Amet</p>
        </address>
      </aside>
  
      <main id="page-content">
        <h2>Lorem ipsum dolor sit amet, consectetur</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
          dolor sequi voluptatem esse doloribus libero commodi ea debitis id
          nostrum odio velit impedit vitae tenetur voluptates vero beatae
          excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit
          dolor sequi voluptatem esse doloribus libero commodi ea debitis id
          nostrum odio velit impedit vitae tenetur voluptates vero beatae
          excepturi.
        </p>
        <br />
        <contactform @review-submitted="addReview" />
      </main>
      <div class="clearfix" />
    </div>
  </template>
  
  <script>
 
  import addressImage from "/images/Address.png";
  import envelopeImage from "/images/envelope.png";
  import telephoneImage from "/images/Telephone.png";
  export default {
    name: "contact-page",
  
    data() {
      return {
        show: "true",
        reviews: [],
        addressImage,
        envelopeImage,
        telephoneImage,
      };
    },
    methods: {
      contactFunction(e) {
        e.preventDefault();
        const el = document.getElementById("contact-page-sidebar");
        const box = el.getAttribute("class");
        if (box === "hide") {
          el.setAttribute("class", "show");
        } else {
          el.setAttribute("class", "hide");
        }
      },
      addReview(productReview) {
        this.reviews.push(productReview);
      },
  
      imageFunc() {
        const addrTitles = document.getElementsByClassName("addr_title");
        console.error(addrTitles);
      },
    },
  };
  </script>
  
  <style lang="scss">
 
  </style>