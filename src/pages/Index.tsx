import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: 'Айдентика бренда косметики', category: 'branding', image: '/img/a4e99dec-9464-459f-befc-4a9b9868a56a.jpg', description: 'Создание логотипа и фирменного стиля для бренда органической косметики' },
    { id: 2, title: 'Упаковка чая премиум-класса', category: 'packaging', image: '/img/28c32358-cfc9-463f-9cd6-dc4dfbf4eb9f.jpg', description: 'Дизайн элегантной упаковки для коллекции травяных чаев' },
    { id: 3, title: 'Лендинг студии йоги', category: 'web', image: '/img/61f2838b-fa33-49de-ba1c-d1869ba6acdb.jpg', description: 'Создание сайта для студии йоги с женственным дизайном' },
    { id: 4, title: 'Логотип ювелирной мастерской', category: 'branding', image: '/img/a4e99dec-9464-459f-befc-4a9b9868a56a.jpg', description: 'Разработка элегантного логотипа для ювелирного бренда' },
    { id: 5, title: 'Иллюстрации для книги', category: 'illustration', image: '/img/5c3677f3-66c6-4bdc-a987-f39d01f6b4d2.jpg', description: 'Серия акварельных иллюстраций для детской книги' },
    { id: 6, title: 'Приложение для медитации', category: 'web', image: '/img/61f2838b-fa33-49de-ba1c-d1869ba6acdb.jpg', description: 'UI/UX дизайн мобильного приложения для медитации' },
  ];

  const services = [
    { 
      title: 'Брендинг', 
      price: 'от 50 000₽', 
      description: 'Создание логотипа, фирменного стиля, гайдлайна',
      icon: 'Palette'
    },
    { 
      title: 'Веб-дизайн', 
      price: 'от 80 000₽', 
      description: 'Дизайн сайтов, лендингов, интернет-магазинов',
      icon: 'Monitor'
    },
    { 
      title: 'Упаковка', 
      price: 'от 30 000₽', 
      description: 'Дизайн упаковки, этикеток, стикеров',
      icon: 'Package'
    },
    { 
      title: 'Иллюстрация', 
      price: 'от 15 000₽', 
      description: 'Создание уникальных иллюстраций и паттернов',
      icon: 'Brush'
    },
  ];

  const workSteps = [
    { step: '01', title: 'Бриф и исследование', description: 'Изучаем ваш бизнес, целевую аудиторию и конкурентов' },
    { step: '02', title: 'Концепт и мудборд', description: 'Создаем визуальную концепцию и настроение проекта' },
    { step: '03', title: 'Дизайн и презентация', description: 'Разрабатываем дизайн и представляем варианты' },
    { step: '04', title: 'Финализация', description: 'Дорабатываем детали и готовим файлы к использованию' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
              София
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden border-primary text-primary">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-pink-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                ✨ Графический дизайнер
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Привет! Я София
                <span className="block bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                  создаю красоту
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Превращаю ваши идеи в визуальные истории, которые влюбляют с первого взгляда. 
                Специализируюсь на женственном и элегантном дизайне.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-pink-400 hover:from-primary/80 hover:to-pink-400/80">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Обсудить проект
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary/10 via-pink-100 to-purple-100 rounded-full relative overflow-hidden">
                <div className="absolute inset-8 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <Icon name="Palette" size={120} className="text-primary" />
                </div>
                <div className="absolute top-12 right-12 w-20 h-20 bg-pink-200 rounded-full opacity-70"></div>
                <div className="absolute bottom-16 left-8 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-pink-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <Icon name="Heart" size={120} className="text-primary" />
                <div className="absolute top-8 right-8 w-12 h-12 bg-pink-300 rounded-full opacity-60"></div>
                <div className="absolute bottom-12 left-12 w-8 h-8 bg-purple-300 rounded-full opacity-70"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                💫 Обо мне
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Создаю дизайн с душой</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Я — графический дизайнер с 5-летним опытом создания красивых и эффективных 
                визуальных решений. Моя страсть — превращать идеи в яркие, запоминающиеся образы.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Специализируюсь на брендинге, веб-дизайне и упаковке. Особенно люблю работать 
                с женскими брендами и проектами, где важна эстетика и эмоциональная связь с аудиторией.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Реализованных проектов</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              🎨 Портфолио
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Мои работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — это история, рассказанная через дизайн
            </p>
          </div>

          {/* Portfolio Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'Все работы', icon: 'Grid' },
              { key: 'branding', label: 'Брендинг', icon: 'Star' },
              { key: 'web', label: 'Веб-дизайн', icon: 'Monitor' },
              { key: 'packaging', label: 'Упаковка', icon: 'Package' },
              { key: 'illustration', label: 'Иллюстрация', icon: 'Brush' },
            ].map(filter => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full ${
                  activeFilter === filter.key 
                    ? 'bg-gradient-to-r from-primary to-pink-400 text-white' 
                    : 'border-primary/20 hover:border-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={filter.icon as any} size={16} className="mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group border-primary/10">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-pink-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть детали
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              💼 Услуги
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Что я предлагаю</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр дизайнерских услуг для вашего бренда
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/10 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent mb-3">
                  {service.price}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Button variant="outline" size="sm" className="w-full border-primary/20 text-primary hover:bg-primary/5">
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              ⚡ Процесс работы
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Как я работаю</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Структурированный процесс для достижения лучшего результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              💌 Контакты
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Давайте создадим что-то прекрасное</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готова воплотить ваши идеи в жизнь и создать дизайн, который вдохновляет
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-primary/10">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">Обсудим ваш проект?</h3>
                <p className="text-muted-foreground">Напишите мне, и мы найдем идеальное решение для вашего бренда</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 bg-gradient-to-r from-primary to-pink-400 hover:from-primary/80 hover:to-pink-400/80">
                  <Icon name="Mail" size={20} className="mr-2" />
                  sofia@example.com
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary/5">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-pink-400 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4">София</div>
            <p className="text-white/80 mb-6">Графический дизайнер • Создаю красоту в деталях</p>
            <div className="flex justify-center space-x-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                <Icon name="Instagram" size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                <Icon name="Facebook" size={20} className="text-white" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 cursor-pointer transition-colors">
                <Icon name="Twitter" size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;