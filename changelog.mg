* Созданы компоненты
    BookListComponent
    BookComponent (--no-spec)
    CartComponent (--flat)
    CartItemComponent
    ProcessOrderFormComponent

* Создан PIPE
  SomePipe

* Создан сервис
    SomeService
	
	
* Создана следующая файловая сруктура 
  app
        cart
            components
                cart
                cart-item
                index.ts
            cart.module.ts 
            models
                cart-item.model.ts 
        orders
            components
                process-order-form
                index.ts
            orders.module.ts 
        products
            components
                book
                book-list
                index.ts
            products.module.ts
            models
                book.model.ts 
        shared
            components
            directives
            pipes
            shared.module.ts
			
*компоненты CartComponent, BookListComponent выведены в AppComponent
* Созданы модели CartModel BookModel
* В компонентах CartComponent BookListComponent созданы коллекции товаров и выведены в шаблон

*В компоненте ProcessOrderFormComponent создана фрома 
Имя 
Email
Телефон
Кнопка отправить

* Внесены изменения в компоненты BookComponent, CartItemComponent: созданы инпуты для получения книжки и купленой книжки соответственно.
* Организована передача книжек в    компоненты BookComponent, CartItemComponent и добавлен шаблон для вывода информации по книжке и по купленой книжке.
* В компонент BookComponent добавлена  кнопка "Купить" с сответвующим аутпутом
* В компоненте CartItemComponent добавлены кнопки "+", "-" для увеличени и уменьшения купленого товара, подготовлены аутпуты для изменеия quantity в СartListComponent
* В CartComponent добавлена кнопка Оформить