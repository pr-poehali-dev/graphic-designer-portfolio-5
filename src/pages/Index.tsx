import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    { id: 1, title: 'Дизайн логотипа', category: 'branding', image: '/img/c6f3aa9a-12ec-405e-a628-e6436bb61adf.jpg' },
    { id: 2, title: 'Упаковка продукта', category: 'packaging', image: '/img/fc2aabdb-1607-4537-a198-04f87e608b84.jpg' },
    { id: 3, title: 'Веб-дизайн', category: 'web', image: '/img/68c9011c-5fe2-42a8-bbed-2e1ef4ce15bb.jpg' },
    { id: 4, title: 'Фирменный стиль', category: 'branding', image: '/img/c6f3aa9a-12ec-405e-a628-e6436bb61adf.jpg' },
    { id: 5, title: 'Иллюстрация', category: 'illustration', image: '/placeholder.svg' },
    { id: 6, title: 'Мобильное приложение', category: 'web', image: '/img/68c9011c-5fe2-42a8-bbed-2e1ef4ce15bb.jpg' },
  ];

  const categories = [
    { id: 'all', name: 'Все проекты' },
    { id: 'branding', name: 'Брендинг' },
    { id: 'web', name: 'Веб-дизайн' },
    { id: 'packaging', name: 'Упаковка' },
    { id: 'illustration', name: 'Иллюстрация' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="font-montserrat font-bold text-xl">Анна Дизайнер</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-gray-600 transition-colors">Главная</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">Обо мне</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors">Портфолио</a>
              <a href="#services" className="hover:text-gray-600 transition-colors">Услуги</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Создаю
                <span className="block text-gray-600">визуальные</span>
                решения
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Графический дизайнер с 5-летним опытом создания уникальных брендов 
                и визуальных решений для малого и среднего бизнеса
              </p>
              <div className="flex space-x-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Посмотреть работы
                </Button>
                <Button variant="outline">
                  Связаться со мной
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-100 rounded-full flex items-center justify-center">
                <Icon name="Palette" size={80} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-4xl font-bold mb-8">Обо мне</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Привет! Меня зовут Анна, и я графический дизайнер с безграничной страстью к созданию 
              визуальных историй. Я верю, что хороший дизайн — это не просто красота, 
              а инструмент коммуникации, который помогает брендам находить своих клиентов.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">5+ лет опыта</h3>
                <p className="text-gray-600">Работы с малым и средним бизнесом</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">50+ проектов</h3>
                <p className="text-gray-600">Успешно реализованных работ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">К каждому клиенту и проекту</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-4xl font-bold text-center mb-16">Почему выбирают меня</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Быстрое выполнение</h3>
                    <p className="text-gray-600">Соблюдаю все сроки и часто завершаю проекты раньше времени</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Креативный подход</h3>
                    <p className="text-gray-600">Нестандартные решения для каждой задачи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Постоянная связь</h3>
                    <p className="text-gray-600">Регулярно информирую о ходе работы и обсуждаю детали</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Ориентация на результат</h3>
                    <p className="text-gray-600">Дизайн, который решает бизнес-задачи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Repeat" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Бесплатные правки</h3>
                    <p className="text-gray-600">До 3 раундов корректировок включены в стоимость</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Гарантия качества</h3>
                    <p className="text-gray-600">100% уникальные работы с передачей авторских прав</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-gray-600">Избранные работы за последние годы</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? 'bg-black text-white' 
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{categories.find(c => c.id === item.category)?.name}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Посмотреть детали
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-gray-600">Полный спектр дизайнерских услуг для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Palette" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Разработка логотипа</h3>
              <p className="text-gray-600 mb-6">Уникальный логотип, отражающий суть вашего бренда</p>
              <p className="font-semibold text-2xl mb-4">от 15 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Layout" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Фирменный стиль</h3>
              <p className="text-gray-600 mb-6">Полная айдентика: логотип, визитки, бланки</p>
              <p className="font-semibold text-2xl mb-4">от 35 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Дизайн упаковки</h3>
              <p className="text-gray-600 mb-6">Яркая упаковка, которая выделит товар на полке</p>
              <p className="font-semibold text-2xl mb-4">от 25 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Monitor" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Веб-дизайн</h3>
              <p className="text-gray-600 mb-6">Дизайн сайтов и лендингов</p>
              <p className="font-semibold text-2xl mb-4">от 40 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Pen" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Иллюстрация</h3>
              <p className="text-gray-600 mb-6">Уникальные иллюстрации для любых задач</p>
              <p className="font-semibold text-2xl mb-4">от 8 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">Печатная продукция</h3>
              <p className="text-gray-600 mb-6">Буклеты, каталоги, листовки</p>
              <p className="font-semibold text-2xl mb-4">от 5 000 ₽</p>
              <Button variant="outline" className="w-full">Заказать</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Как я работаю</h2>
            <p className="text-lg text-gray-600">Пошаговый процесс создания дизайна</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">Анализ и бриф</h3>
                  <p className="text-gray-600">Изучаем ваш бизнес, целевую аудиторию и конкурентов. Определяем задачи и ожидания от проекта.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">Концепция и эскизы</h3>
                  <p className="text-gray-600">Создаю несколько концептуальных направлений и представляю их в виде эскизов для обсуждения.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">Детализация</h3>
                  <p className="text-gray-600">Выбираем лучшую концепцию и дорабатываем её до финального варианта с учётом ваших пожеланий.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-montserrat font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">Презентация</h3>
                  <p className="text-gray-600">Представляю готовый дизайн в контексте использования и передаю все исходные файлы.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold mb-4">Полезные материалы</h2>
            <p className="text-lg text-gray-600">Статьи и советы о дизайне и брендинге</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Как выбрать цвета для бренда</h3>
                <p className="text-gray-600 text-sm mb-4">Психология цвета в дизайне и её влияние на восприятие бренда</p>
                <Button variant="outline" size="sm">Читать статью</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Тренды дизайна 2024</h3>
                <p className="text-gray-600 text-sm mb-4">Актуальные направления в графическом дизайне этого года</p>
                <Button variant="outline" size="sm">Читать статью</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold mb-2">Подготовка к печати</h3>
                <p className="text-gray-600 text-sm mb-4">Чек-лист для подготовки макетов к типографской печати</p>
                <Button variant="outline" size="sm">Читать статью</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-4xl font-bold mb-8">Готовы начать проект?</h2>
            <p className="text-lg mb-12">Свяжитесь со мной, и мы обсудим ваши задачи</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-black" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Email</h3>
                <p className="text-gray-300">anna@designer.ru</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-black" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-black" />
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Telegram</h3>
                <p className="text-gray-300">@anna_designer</p>
              </div>
            </div>

            <Button className="bg-white text-black hover:bg-gray-100">
              Написать мне
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-montserrat font-bold text-white mb-4 md:mb-0">
              Анна Дизайнер
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Behance</a>
              <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Анна Дизайнер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;