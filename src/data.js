import styled from "styled-components";

import ImprDetHorseRiding from "./assets/images/ImprDetHorseRiding.png";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
`;

const BoldParagraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
`;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding-left: 20px;

  @media (max-width: 375px) {
    gap: 15px;
  }
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;

  &::marker {
    height: 10px;
    width: 10px;
    color: #547147;
  }
`;

export const impressionsData = [
  {
    id: 1,
    title: "РОМАНТИЧЕСКИЙ ПИКНИК",
    options: [
      {
        price: "2 500 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Вспомните, как в романтических фильмах главные герои уютно
              устраиваются на природе с чашечкой горячего чая и ведут неспешные
              беседы друг с другом 😍
            </p>
            <p>Именно эту картинку мы воспроизвели в нашем впечатлении.</p>
            <p>В пикник входит:</p>
            <ul>
              <li>Горячий, ароматный чай</li>
              <li>Круассаны со сладкой начинкой</li>
              <li>Сладости к чаю</li>
              <li>Стильный декор</li>
              <li>Свеча в подсвечнике для романтической обстановки</li>
              <li>Теплые пледы для уютного отдыха</li>
            </ul>
            <p>
              Продукты закупаем непосредственно перед вашим приходом, чтобы вы
              наслаждались свежими и вкусными угощениями.
            </p>
            <p>
              Как правило, пикники мы организуем в тихих и красивых местах,
              чтобы никто не смог помешать вашему общению. Наш сотрудник
              подготовит столик к свиданию, встретит вас, и все время будет в
              5-минутной доступности, чтобы помочь в случае необходимости.
            </p>
            <p>Есть 3 варианта Романтического пикника на природе:</p>
            <ul>
              <li>
                <p>Столик в прекрасном уединенном месте для двоих</p>
                <p>Продолжительность — 1 час</p>
              </li>
              <li>
                <p>Конная прогулка для двоих + пикник</p>
                <p>Продолжительность — 1.5 часа</p>
                <p>(1 час — прогулка + 30 минут — пикник)</p>
              </li>
              <li>
                <p>Поездка на болотоходе + пикник</p>
                <p>Продолжительность — 1.5 часа</p>
                <p>(1 час — заезд + 30 минут — пикник)</p>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "ЗАПИСЬ ПЕСНИ В СТУДИИ",
    options: [
      {
        price: "5 000 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Запись песни в профессиональной студии — очень необычное
              впечатление, которое точно произведет фурор!
            </p>
            <p>
              Только представьте, как здорово почувствовать себя настоящей
              звездой: микрофон, наушники, звукорежиссер, аппаратура — все это
              будет при записи трека 🔥
            </p>
            <p>Вы можете:</p>
            <p>
              Сами записать песню-поздравление, если предпочитаете создавать
              подарки "своими руками"
            </p>
            <p>
              Подарить сертификат на запись тому, кто не смыслит свою жизнь без
              музыки и песен
            </p>
            <ul>
              <li>
                Продолжительность — 2 часа (за это время вы запишите полноценный
                трек)
              </li>
              <li>Помощь профессионалов при выборе и исполнении композиции</li>
              <li>Допустимый возраст — от 4 лет</li>
              <li>Продолжительность обработки трека — 5-7 дней</li>
              <li>Студия находится в центре города</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "ИГРА В ВИРТУАЛЬНОЙ РЕАЛЬНОСТИ",
    options: [
      {
        price: "600 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Играя в очках виртуальной реальности, вы погружаетесь в совершенно
              другой мир — у вас другая картинка, другие ощущения, другое
              восприятие.
            </p>
            <p>
              Неважно, сколько вам лет и чем вы занимаетесь, вы можете собраться
              компанией и провести командное VR-сражение.
            </p>
            <p>
              Чтобы победить в сражении придется активно двигаться, прятаться за
              укрытиями и быстро перемещаться! Не вы управляете героем, вы и
              есть герои!
            </p>
            <p>Что вас ждет на арене виртуальной реальности:</p>
            <ul>
              <li>Командное сражение — от 2 до 10 человек</li>
              <li>Продолжительность — от 1 часа</li>
              <li>Возраст — от 8 лет</li>
              <li>Фуршетная комната для праздников</li>
              <li>Playstation 4</li>
              <li>Горячий чай и кофе</li>
            </ul>
            <p>Что вас ждет на арене виртуальной реальности:</p>
            <ul>
              <li>
                Присоединиться к другой команде в открытой игре (от 2 человек)
              </li>
              <li>
                Собрать свою команду и сразиться друг против друга (от 2 до 10
                человек)
              </li>
              <li>
                Провести закрытое мероприятие с фуршетом в отдельной комнате (до
                15 игроков)
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "ПОЕЗДКА НА БОЛОТОХОДАХ",
    options: [
      {
        price: "3 500 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Болотоходы на летний период переехали под Сызрань. Всего 100 км от
              Ульяновска!{" "}
            </p>
            <p>
              Летняя трасса включает в себя проезд по бездорожью в лесу через
              ручьи, овражки и кочки. То есть это классная трасса, позволяющая в
              полной мере ощутить мощь и проходимость болотоходов 🔥{" "}
            </p>
            <p>
              Инструктор покажет трассу, расскажет о самых интересных местах, а
              дальше болотоходом вы управляете самостоятельно.
            </p>
            <p>Стоимость — 3 500 руб/час</p>
            <ul>
              <li>Продолжительность поездки — от 1 часа</li>
              <li>Вместимость болотохода — 3 человека</li>
              <li>Допустимый возраст — от 4 лет</li>
              <li>Средняя скорость — 40 км/час</li>
              <li>Мощность — 1000 кубов</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 5,
    title: "КОННАЯ ПРОГУЛКА",
    imgSrc: [ImprDetHorseRiding, ImprDetHorseRiding, ImprDetHorseRiding],
    options: [
      {
        price: "от 990 ₽",
        feature: "30 мин",
        description: (
          <Div>
            <Paragraph>
              Конные прогулки подходят как для взрослых, так и для детей от 3
              лет.
            </Paragraph>
            <UnorderedList>
              <ListItem>
                Для взрослых — гнедые рысаки, выдерживающие до 90 кг
              </ListItem>
              <ListItem>
                Для детей — милые пони, которые вызывают восторг у малышей
              </ListItem>
            </UnorderedList>
            <Paragraph>
              Наш инструктор Анастасия познакомит вас с лошадьми, подробно
              расскажет и покажет особенности общения с этими животными,
              проведет короткий инструктаж и поможет сесть верхом.
            </Paragraph>
            <Paragraph>
              Под присмотром инструктора вы сможете погладить лошадь, покормить
              ее, взять под уздцы и самостоятельно поуправлять во время
              прогулки.
            </Paragraph>
            <Paragraph>
              Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы
              даже новички чувствовали себя комфортно.
            </Paragraph>
            <BoldParagraph>Варианты прогулок:</BoldParagraph>
            <Paragraph>Стандартная — 30 минут - 990 рублей</Paragraph>
            <Paragraph>Полноценная — 1 час - 1 500 рублей</Paragraph>
            <Paragraph>
              Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)
            </Paragraph>
            <Paragraph>
              Фотосессия с лошадью или пони — 30 минут - 3 000 руб
            </Paragraph>
            <Paragraph>Локация - ипподром за Парком Победы</Paragraph>
          </Div>
        ),
      },
      {
        price: "1 500 ₽",
        feature: "1 час",
        description: (
          <div>
            <p>
              Конные прогулки подходят как для взрослых, так и для детей от 3
              лет.
            </p>
            <ul>
              <li>Для взрослых — гнедые рысаки, выдерживающие до 90 кг</li>
              <li>
                Для детей — милые пони, которые вызывают восторг у малышей
              </li>
            </ul>
            <p>
              Наш инструктор Анастасия познакомит вас с лошадьми, подробно
              расскажет и покажет особенности общения с этими животными,
              проведет короткий инструктаж и поможет сесть верхом.
            </p>
            <p>
              Под присмотром инструктора вы сможете погладить лошадь, покормить
              ее, взять под уздцы и самостоятельно поуправлять во время
              прогулки.
            </p>
            <p>
              Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы
              даже новички чувствовали себя комфортно.
            </p>
            <p>Варианты прогулок:</p>
            <ul>
              <li>Стандартная — 30 минут - 990 рублей</li>
              <li>Полноценная — 1 час - 1 500 рублей</li>
              <li>Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)</li>
              <li>Фотосессия с лошадью или пони — 30 минут - 3 000 руб</li>
            </ul>
            <p>Локация - ипподром за Парком Победы</p>
          </div>
        ),
      },
      {
        price: "5 000 ₽",
        feature: "1,5 часа",
        description: (
          <div>
            <p>
              Конные прогулки подходят как для взрослых, так и для детей от 3
              лет.
            </p>
            <ul>
              <li>Для взрослых — гнедые рысаки, выдерживающие до 90 кг</li>
              <li>
                Для детей — милые пони, которые вызывают восторг у малышей
              </li>
            </ul>
            <p>
              Наш инструктор Анастасия познакомит вас с лошадьми, подробно
              расскажет и покажет особенности общения с этими животными,
              проведет короткий инструктаж и поможет сесть верхом.
            </p>
            <p>
              Под присмотром инструктора вы сможете погладить лошадь, покормить
              ее, взять под уздцы и самостоятельно поуправлять во время
              прогулки.
            </p>
            <p>
              Наши лошади спокойные, уравновешенные и хорошо воспитанные, чтобы
              даже новички чувствовали себя комфортно.
            </p>
            <p>Варианты прогулок:</p>
            <ul>
              <li>Стандартная — 30 минут - 990 рублей</li>
              <li>Полноценная — 1 час - 1 500 рублей</li>
              <li>Романтическая прогулка — 1,5 часа - 5 000 руб (на двоих)</li>
              <li>Фотосессия с лошадью или пони — 30 минут - 3 000 руб</li>
            </ul>
            <p>Локация - ипподром за Парком Победы</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 6,
    title: "ДРАЙВ НА КВАДРОЦИКЛАХ",
    options: [
      {
        price: "1 800 ₽",
        feature: "1 маршрут",
        description: (
          <div>
            <p>
              У нас мощные, двухместные квадроциклы, на которых вы сможете
              прокатиться вдвоем и в процессе меняться местами.
            </p>
            <p>
              Квадроциклы — это юркая, маневренная техника. Здесь не нужны опыт
              вождения, водительские права или еще какие-то особенные условия.
              Инструктор подробно всё объяснит и к тому же будет сопровождать
              вас на маршруте и помогать на сложных участках.
            </p>
            <p>
              У нас есть несколько маршрутов, которые ведут по живописным местам
              к Волге.
            </p>
            <ul>
              <li>
                <p>1 маршрут (для новичков)</p>
                <p>Продолжительность: 30 минут</p>
              </li>
              <li>
                <p>2 маршрут (для тех, кто любит активный отдых)</p>
                <p>Продолжительность: 1 час</p>
              </li>
              <li>
                <p>3 маршрут (для экстремалов)</p>
                <p>Продолжительность: 2 часа</p>
              </li>
            </ul>
            <p>Все маршруты стартуют от Архангельской Слободы</p>
          </div>
        ),
      },
      {
        price: "3 000 ₽",
        feature: "2 маршрут",
        description: (
          <div>
            <p>
              У нас мощные, двухместные квадроциклы, на которых вы сможете
              прокатиться вдвоем и в процессе меняться местами.
            </p>
            <p>
              Квадроциклы — это юркая, маневренная техника. Здесь не нужны опыт
              вождения, водительские права или еще какие-то особенные условия.
              Инструктор подробно всё объяснит и к тому же будет сопровождать
              вас на маршруте и помогать на сложных участках.
            </p>
            <p>
              У нас есть несколько маршрутов, которые ведут по живописным местам
              к Волге.
            </p>
            <ul>
              <li>
                <p>1 маршрут (для новичков)</p>
                <p>Продолжительность: 30 минут</p>
              </li>
              <li>
                <p>2 маршрут (для тех, кто любит активный отдых)</p>
                <p>Продолжительность: 1 час</p>
              </li>
              <li>
                <p>3 маршрут (для экстремалов)</p>
                <p>Продолжительность: 2 часа</p>
              </li>
            </ul>
            <p>Все маршруты стартуют от Архангельской Слободы</p>
          </div>
        ),
      },
      {
        price: "5 500 ₽",
        feature: "3 маршрут",
        description: (
          <div>
            <p>
              У нас мощные, двухместные квадроциклы, на которых вы сможете
              прокатиться вдвоем и в процессе меняться местами.
            </p>
            <p>
              Квадроциклы — это юркая, маневренная техника. Здесь не нужны опыт
              вождения, водительские права или еще какие-то особенные условия.
              Инструктор подробно всё объяснит и к тому же будет сопровождать
              вас на маршруте и помогать на сложных участках.
            </p>
            <p>
              У нас есть несколько маршрутов, которые ведут по живописным местам
              к Волге.
            </p>
            <ul>
              <li>
                <p>1 маршрут (для новичков)</p>
                <p>Продолжительность: 30 минут</p>
              </li>
              <li>
                <p>2 маршрут (для тех, кто любит активный отдых)</p>
                <p>Продолжительность: 1 час</p>
              </li>
              <li>
                <p>3 маршрут (для экстремалов)</p>
                <p>Продолжительность: 2 часа</p>
              </li>
            </ul>
            <p>Все маршруты стартуют от Архангельской Слободы</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 7,
    title: "ВЕЛОПРОГУЛКА С ПИКНИКОМ",
    options: [
      {
        price: "3 000 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Что может быть романтичнее, чем прокатиться вдвоем по городу на
              велосипедах, любоваться прекрасным видом на Волгу, а затем
              отдохнуть и перекусить в уединенном месте на пикнике? 😍
            </p>
            <ul>
              <li>
                Общая продолжительность — 2 часа (1.5 часа дорога на
                велосипедах, 30-40 мин пикник)
              </li>
              <li>Сложность маршрута — средняя</li>
              <li>Старт из центра города</li>
              <li>Подробная карта маршрута</li>
              <li>2 синих, французских велосипеда</li>
              <li>Романтический пикник с угощением</li>
            </ul>
            <p>Возможны 2 варианта пикника:</p>
            <ul>
              <li>Классический на земле</li>
              <li>Столик на двоих</li>
            </ul>
            <p>
              Данное впечатление с элементом квеста подойдет для пар, которые
              любят активно проводить время, хотят разнообразить свои будни и
              отвлечься от быта, а также классный способ необычно отпраздновать
              годовщину свадьбы.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 8,
    title: "ПРОГУЛКА НА ЯХТЕ",
    options: [
      {
        price: "3 500 ₽",
        feature: "1 час",
        description: (
          <div>
            <p>Прогулка на комфортабельной яхте "Чайка"</p>
            <p>
              Теплое солнце, шум волн, крик чаек и мерное покачивание яхты — вам
              захочется, чтобы эти мгновения продлились дольше!
            </p>
            <p>Стоимость:</p>
            <p>Прогулка вдоль побережья (1 час) — 3 500 рублей</p>
            <p>Отдых на яхте посреди Волги (2 часа) — 6 500 рублей</p>
            <p>
              Путешествие в сторону Пальцинского острова (3 часа) — 9 000 рублей
            </p>
            <ul>
              <li>Вместимость — до 5 человек</li>
              <li>Допустимый возраст — от 7 лет</li>
              <li>Точка старта — Речной Порт</li>
              <li>С собой можно взять угощение и напитки</li>
            </ul>
          </div>
        ),
      },
      {
        price: "6 500 ₽",
        feature: "2 часа",
        description: (
          <div>
            <p>Прогулка на комфортабельной яхте "Чайка"</p>
            <p>
              Теплое солнце, шум волн, крик чаек и мерное покачивание яхты — вам
              захочется, чтобы эти мгновения продлились дольше!
            </p>
            <p>Стоимость:</p>
            <p>Прогулка вдоль побережья (1 час) — 3 500 рублей</p>
            <p>Отдых на яхте посреди Волги (2 часа) — 6 500 рублей</p>
            <p>
              Путешествие в сторону Пальцинского острова (3 часа) — 9 000 рублей
            </p>
            <ul>
              <li>Вместимость — до 5 человек</li>
              <li>Допустимый возраст — от 7 лет</li>
              <li>Точка старта — Речной Порт</li>
              <li>С собой можно взять угощение и напитки</li>
            </ul>
          </div>
        ),
      },
      {
        price: "9 000 ₽",
        feature: "3 часа",
        description: (
          <div>
            <p>Прогулка на комфортабельной яхте "Чайка"</p>
            <p>
              Теплое солнце, шум волн, крик чаек и мерное покачивание яхты — вам
              захочется, чтобы эти мгновения продлились дольше!
            </p>
            <p>Стоимость:</p>
            <p>Прогулка вдоль побережья (1 час) — 3 500 рублей</p>
            <p>Отдых на яхте посреди Волги (2 часа) — 6 500 рублей</p>
            <p>
              Путешествие в сторону Пальцинского острова (3 часа) — 9 000 рублей
            </p>
            <ul>
              <li>Вместимость — до 5 человек</li>
              <li>Допустимый возраст — от 7 лет</li>
              <li>Точка старта — Речной Порт</li>
              <li>С собой можно взять угощение и напитки</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 9,
    title: "ПОЛЕТ В АЭРОТРУБЕ",
    options: [
      {
        price: "1 800 ₽",
        feature: "3 минуты",
        description: (
          <div>
            <p>
              Аэротруба – это тренажер, имитирующий полёт в свободном падении. В
              ней человек испытывает примерно те же эмоции, что и от прыжка с
              парашютом.
            </p>
            <p>
              Только в среднем полет в небе длится 60 секунд, а в аэротрубе
              сможете летать от 3 минут. То есть вы получите тот же восторг, как
              от прыжка с парашютом, помноженный на три, и при этом абсолютно
              безопасно.
            </p>
            <p>Вам выдадут комбинезон и шлем для полёта.</p>
            <p>
              Специальные навыки не требуются – в течение всего полета рядом с
              вами будет находиться надежный инструктор.
            </p>
            <p>
              Перед полетом вы пройдете специальную подготовку – инструктор
              объяснит основы движения в воздухе и проинформирует о технике
              безопасности.
            </p>
            <p>Локация - ул. Портовая 25 (перед зданием речного вокзала)</p>
          </div>
        ),
      },
      {
        price: "3 000 ₽",
        feature: "6 минут",
        description: (
          <div>
            <p>
              Аэротруба – это тренажер, имитирующий полёт в свободном падении. В
              ней человек испытывает примерно те же эмоции, что и от прыжка с
              парашютом.
            </p>
            <p>
              Только в среднем полет в небе длится 60 секунд, а в аэротрубе
              сможете летать от 3 минут. То есть вы получите тот же восторг, как
              от прыжка с парашютом, помноженный на три, и при этом абсолютно
              безопасно.
            </p>
            <p>Вам выдадут комбинезон и шлем для полёта.</p>
            <p>
              Специальные навыки не требуются – в течение всего полета рядом с
              вами будет находиться надежный инструктор.
            </p>
            <p>
              Перед полетом вы пройдете специальную подготовку – инструктор
              объяснит основы движения в воздухе и проинформирует о технике
              безопасности.
            </p>
            <p>Локация - ул. Портовая 25 (перед зданием речного вокзала)</p>
          </div>
        ),
      },
      {
        price: "4 800 ₽",
        feature: "10 минут",
        description: (
          <div>
            <p>
              Аэротруба – это тренажер, имитирующий полёт в свободном падении. В
              ней человек испытывает примерно те же эмоции, что и от прыжка с
              парашютом.
            </p>
            <p>
              Только в среднем полет в небе длится 60 секунд, а в аэротрубе
              сможете летать от 3 минут. То есть вы получите тот же восторг, как
              от прыжка с парашютом, помноженный на три, и при этом абсолютно
              безопасно.
            </p>
            <p>Вам выдадут комбинезон и шлем для полёта.</p>
            <p>
              Специальные навыки не требуются – в течение всего полета рядом с
              вами будет находиться надежный инструктор.
            </p>
            <p>
              Перед полетом вы пройдете специальную подготовку – инструктор
              объяснит основы движения в воздухе и проинформирует о технике
              безопасности.
            </p>
            <p>Локация - ул. Портовая 25 (перед зданием речного вокзала)</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 10,
    title: "ВЕЧЕР В КУПОЛЕ",
    options: [
      {
        price: "от 3 000 ₽",
        feature: "На двоих",
        description: (
          <div>
            <p>
              Уютный вечер под открытым небом в любое время года — это абсолютно
              реально!
            </p>
            <p>
              В обогреваемом прозрачном куполе на крыше в самом центре города
              можно и любоваться закатом, и отгадывать созвездия, и наслаждаться
              обществом друг друга.
            </p>
            <p>
              Вас ждут мягкие диваны, любимая музыка, красивые огоньки, стильный
              декор. И, конечно же, вкусные угощения 😏
            </p>
            <p>Купола находятся в самом центре города, на улице Крымова</p>
            <p>Уютный вечер - 3 000 рублей</p>
            <ul>
              <li>Продолжительность — 2 часа</li>
              <li>Уютный, стильно декорированный купол</li>
              <li>
                Bluetooth-колонка, через которую вы сможете поставить любимую
                музыку
              </li>
              <li>
                Специально подготовленные вопросы, которые вы сможете задать
                друг другу, чтобы интересно провести время
              </li>
              <li>Вкусные и сытные закуски</li>
              <li>Ароматный чай</li>
            </ul>
            <p>Романтическое свидание - 4 500 рублей</p>
            <ul>
              <li>Продолжительность — 2 часа</li>
              <li>Уютный, стильно декорированный купол</li>
              <li>
                Bluetooth-колонка, через которую вы сможете поставить любимую
                музыку
              </li>
              <li>Лепестки роз для романтичной атмосферы</li>
              <li>
                Специально подготовленные вопросы, которые вы сможете задать
                друг другу, чтобы интересно провести время
              </li>
              <li>Сытный ужин для двоих</li>
              <li>Сладкий десерт</li>
              <li>Ароматный чай</li>
            </ul>
          </div>
        ),
      },
      {
        price: "от 5 000 ₽",
        feature: "До 6 чел.",
        description: (
          <div>
            <p>
              Уютный вечер под открытым небом в любое время года — это абсолютно
              реально!
            </p>
            <p>
              В обогреваемом прозрачном куполе на крыше в самом центре города
              можно и любоваться закатом, и отгадывать созвездия, и наслаждаться
              обществом друг друга.
            </p>
            <p>
              Вас ждут мягкие диваны, любимая музыка, красивые огоньки, стильный
              декор. И, конечно же, вкусные угощения 😏
            </p>
            <p>Купола находятся в самом центре города, на улице Крымова</p>
            <p>Уютный вечер - 5 000 рублей</p>
            <ul>
              <li>Продолжительность — 2 часа</li>
              <li>Уютный, стильно декорированный купол</li>
              <li>
                Bluetooth-колонка, через которую вы сможете поставить любимую
                музыку
              </li>
              <li>
                Вкусные и сытные закуски
                <ul>
                  <li>4 сытных круассана</li>
                  <li>8 фруктовых тарталеток</li>
                </ul>
              </li>
              <li>Ароматный чай 0,9 л</li>
            </ul>
            <p>Дружеский вечер - 6 500 рублей</p>
            <ul>
              <li>Продолжительность — 2 часа</li>
              <li>Уютный, стильно декорированный купол</li>
              <li>
                Bluetooth-колонка, через которую вы сможете поставить любимую
                музыку
              </li>
              <li>
                Набор разнообразных закусок
                <ul>
                  <li>4 греческих салата</li>
                  <li>8 брускетт</li>
                  <li>12 фруктовых тарталеток</li>
                  <li>4 десерта</li>
                </ul>
              </li>
              <li>Ароматный чай 0,9 л</li>
            </ul>
            <p>День рождения - 8 000 рублей</p>
            <ul>
              <li>Продолжительность — 2 часа</li>
              <li>Уютный, стильно декорированный купол</li>
              <li>
                Bluetooth-колонка, через которую вы сможете поставить любимую
                музыку
              </li>
              <li>Воздушные шары для создания атмосферы</li>
              <li>Набор разнообразных закусок</li>
              <li>Бутылка шампанского</li>
              <li>Ароматный чай</li>
              <li>
                Можно отдельно заказать фотографа
                <ul>
                  <li>Продожительность - 30 минут</li>
                  <li>Количество кадров - 25-30</li>
                  <li>Стоимость - 2000 руб</li>
                </ul>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 11,
    title: "ПОЛЕТ НА МОТОПАРАПЛАНЕ",
    options: [
      {
        price: "3 000 ₽",
        feature: "",
        description: (
          <div>
            <p>
              Людям всегда было свойственно мечтать о небе, стремиться к
              простору и горизонтам.
            </p>
            <p>
              Мотопараплан позволит исполнить эту мечту и посмотреть на мир с
              высоты птичьего полёта. Все заботы и неприятности останутся на
              земле, а вы будете ловить облака, дышать полной грудью и
              наслаждаться свободой 🔥
            </p>
            <ul>
              <li>Продолжительность полёта - 10 мин </li>
              <li>Высота полета — 250 м</li>
              <li>Скорость полета — 60 км/ч</li>
              <li>Короткий инструктаж по технике безопасности</li>
              <li>Защитный шлем со связью с инструктором</li>
              <li>Возраст — от 6 лет</li>
            </ul>
            <p>
              Полеты проходят совсем рядом с городом — около с. Архангельская
              Слобода
            </p>
            <p>
              Мотопараплан — самый безопасный вид летательного аппарата. Особая
              конструкция парашюта позволяет сделать взлет и приземление
              плавными, а управление полетом легким и безопасным.
            </p>
          </div>
        ),
      },
    ],
  },
];
