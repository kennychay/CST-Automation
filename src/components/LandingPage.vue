<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->

<template>
    <div class="min-h-screen bg-white">
      <!-- Hero Section -->
      <section class="relative h-[600px] overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/981039296d079e7139e146b66ccaa4b0.jpg"
            class="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent"></div>
        </div>
        
        <div class="relative container mx-auto px-6 h-full flex items-center">
          <div class="max-w-2xl text-white">
            <h1 class="text-5xl font-bold mb-6">Transforming Industry Through Automation</h1>
            <p class="text-xl mb-8">Leading the future of manufacturing with cutting-edge automation solutions that drive efficiency, precision, and innovation.</p>
            <div class="flex gap-4">
              <a-button type="primary" class="!rounded-button bg-teal-600 hover:bg-teal-700 text-white border-none h-12 px-8 text-lg whitespace-nowrap">
                Get Started
              </a-button>
              <a-button class="!rounded-button bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20 h-12 px-8 text-lg whitespace-nowrap">
                Watch Demo
              </a-button>
            </div>
          </div>
        </div>
  
        <!-- Fixed WhatsApp Button -->
        <button 
          class="!rounded-button fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white border-none z-50 h-14 px-6 flex items-center gap-2 whitespace-nowrap"
          @click="handleWhatsAppClick"
        >
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="text-2xl" />
          Chat with us
        </button>
      </section>
  
      <!-- Services Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.id" class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <img :src="service.image" class="w-full h-48 object-cover rounded-lg mb-6" :alt="service.title"/>
              <h3 class="text-2xl font-semibold mb-4">{{ service.title }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Products Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in products" :key="product.id" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img :src="product.image" class="w-full h-64 object-cover" :alt="product.title"/>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3">{{ product.title }}</h3>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <a-button type="primary" class="!rounded-button bg-teal-600 hover:bg-teal-700 border-none whitespace-nowrap">
                  Learn More
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Case Studies Section -->
      <!-- <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <swiper
            :modules="swiperModules"
            :slides-per-view="1"
            :space-between="30"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 5000 }"
            class="mySwiper"
          >
            <swiper-slide v-for="case_study in caseStudies" :key="case_study.id">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img :src="case_study.image" class="w-full h-[400px] object-cover rounded-xl" :alt="case_study.title"/>
                <div class="p-6">
                  <h3 class="text-2xl font-semibold mb-4">{{ case_study.title }}</h3>
                  <p class="text-gray-600 mb-6">{{ case_study.description }}</p>
                  <div class="flex items-center gap-4">
                    <img :src="case_study.clientLogo" class="w-12 h-12 rounded-full" :alt="case_study.client"/>
                    <div>
                      <p class="font-semibold">{{ case_study.client }}</p>
                      <p class="text-gray-500">{{ case_study.date }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section> -->
  
      <!-- Contact Section -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 class="text-4xl font-bold mb-8">Get in Touch</h2>
              <a-form :model="formState" @finish="onFinish" layout="vertical">
                <a-form-item name="name" :rules="[{ required: true, message: 'Please input your name!' }]">
                  <a-input v-model:value="formState.name" placeholder="Your Name" size="large" class="!rounded-button"/>
                </a-form-item>
                <a-form-item name="email" :rules="[{ required: true, type: 'email', message: 'Please input valid email!' }]">
                  <a-input v-model:value="formState.email" placeholder="Your Email" size="large" class="!rounded-button"/>
                </a-form-item>
                <a-form-item name="message" :rules="[{ required: true, message: 'Please input your message!' }]">
                  <a-textarea v-model:value="formState.message" placeholder="Your Message" :rows="4" class="!rounded-button"/>
                </a-form-item>
                <a-button type="primary" html-type="submit" class="!rounded-button bg-teal-600 hover:bg-teal-700 border-none h-12 px-8 text-lg whitespace-nowrap">
                  Send Message
                </a-button>
              </a-form>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
              <div class="space-y-4">
                <p class="flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="text-teal-600" />
                  123 Innovation Drive, Silicon Valley, CA 94025
                </p>
                <p class="flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-phone" class="text-teal-600" />
                  +6012-4556368
                </p>
                <p class="flex items-center gap-3">
                  <font-awesome-icon icon="fa-solid fa-envelope" class="text-teal-600" />
                  chayseongteck@gmail.com
                </p>
              </div>
              <div class="mt-8">
                <h4 class="text-xl font-semibold mb-4">Follow Us</h4>
                <div class="flex gap-4">
                  <a href="#" class="text-gray-600 hover:text-teal-600 text-2xl">
                    <font-awesome-icon icon="fa-brands fa-linkedin" class="text-2xl" />
                  </a>
                  <a href="#" class="text-gray-600 hover:text-teal-600 text-2xl">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl" />
                  </a>
                  <a href="#" class="text-gray-600 hover:text-teal-600 text-2xl">
                    <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl" />
                  </a>
                  <a href="#" class="text-gray-600 hover:text-teal-600 text-2xl">
                    <font-awesome-icon icon="fa-brands fa-instagram" class="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Autoplay } from 'swiper/modules';
  import { message } from 'ant-design-vue';

  const swiperModules = [Pagination, Autoplay];
  
  const services = ref([
    {
      id: 1,
      title: 'Custom Conveyor Systems',
      description: 'Tailored conveyor solutions designed to optimize your production flow and increase efficiency.',
      image: 'https://public.readdy.ai/ai/img_res/244e09bc22d3ffb7687f75cd1b32593f.jpg'
    },
    {
      id: 2,
      title: 'Robotic Integration',
      description: 'Seamless integration of robotic systems to enhance productivity and precision in manufacturing.',
      image: 'https://public.readdy.ai/ai/img_res/a3b2262d433d6106f5d2e08a29b0b797.jpg'
    },
    {
      id: 3,
      title: 'Smart Factory Solutions',
      description: 'Comprehensive IoT and automation solutions for the factory of the future.',
      image: 'https://public.readdy.ai/ai/img_res/98b3667979ab1bcd4ac39f4de1df9170.jpg'
    }
  ]);
  
  const products = ref([
    {
      id: 1,
      title: 'AutoFlex Pro Series',
      description: 'Advanced flexible manufacturing system with intelligent routing and real-time monitoring.',
      image: 'https://public.readdy.ai/ai/img_res/be98664ac7e1a62bf35378fc05d0258e.jpg'
    },
    {
      id: 2,
      title: 'SmartSort 3000',
      description: 'High-speed automated sorting system with AI-powered vision technology.',
      image: 'https://public.readdy.ai/ai/img_res/6a077d654b8a7c012fb30c20bd1e545d.jpg'
    },
    {
      id: 3,
      title: 'RoboAssist X1',
      description: 'Collaborative robot system designed for precise assembly operations.',
      image: 'https://public.readdy.ai/ai/img_res/655099e87ea21e1c1fec6a23cbd53bfb.jpg'
    }
  ]);
  
  const caseStudies = ref([
    {
      id: 1,
      title: 'Global Electronics Manufacturer Automation Success',
      description: 'Implemented a fully automated assembly line that increased production efficiency by 150% and reduced errors by 98%.',
      image: 'https://public.readdy.ai/ai/img_res/894d7bfabc87cb03f3ee68f436868d09.jpg',
      client: 'TechCorp International',
      clientLogo: 'https://public.readdy.ai/ai/img_res/6d18b205e224842bd129dc973dc57ef4.jpg',
      date: 'March 2025'
    },
    {
      id: 2,
      title: 'Automotive Parts Manufacturing Revolution',
      description: 'Revolutionized production line with smart conveyor systems and quality control, achieving 200% throughput increase.',
      image: 'https://public.readdy.ai/ai/img_res/5340fd9c82e0423415d54c3451a146b6.jpg',
      client: 'AutoPrime Solutions',
      clientLogo: 'https://public.readdy.ai/ai/img_res/03e4b0b2adb09e544f1acd25452e9304.jpg',
      date: 'February 2025'
    }
  ]);
  
  const formState = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/0125362836', '_blank');
  };
  
  const onFinish = (values: any) => {
    message.success('Message sent successfully!');
    formState.value = {
      name: '',
      email: '',
      message: ''
    };
  };
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-pagination-bullet-active {
    background-color: #0d9488 !important;
  }
  
  :deep(.ant-input), :deep(.ant-input-textarea) {
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }
  
  :deep(.ant-input:focus), :deep(.ant-input-textarea:focus) {
    border-color: #0d9488;
    box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.2);
  }
  </style>
  
  