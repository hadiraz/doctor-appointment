declare module 'swiper/react' {
    import { SwiperOptions , Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  
    export interface SwiperProps extends SwiperOptions {
      // Add any additional props specific to your usage.
      // For example, if you're using pagination, you can add:
      // pagination?: boolean;
    }
  
    export const Swiper: React.FC<SwiperProps>;
    export const SwiperSlide: React.FC;
  }
  