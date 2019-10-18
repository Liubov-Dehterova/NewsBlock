import React, { Component } from 'react';


const ARTICLES = [
    {
        textName: 'Перша пісня 80-х, яка отримала мільярд переглядів на YouTube',
        text:'Трек 1987 року з їхнього дебютного альбому Appetite for Destruction отримував в середньому 590 тисяч переглядів щодня цього року',
        image: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/CDC3/production/_109257625_gnr.jpg',
        link: 'https://www.bbc.com/ukrainian/news-50085663'
    },
    {
        textName: 'Ватикан випустив електронні "смарт-чотки"',
        text:'Гаджет вартістю 109 доларів можна носити як браслет і активувати, зробивши знак хреста',
        image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FFC4/production/_109267456_mediaitem109267455.jpg',
        link: 'https://www.bbc.com/ukrainian/news-50083171'
    },
    {
        textName: 'Сільське господарство по-японськи - без землі та фермерів',
        text:'Натомість японський вчений застосовує матеріал, від початку призначений для лікування людських нирок - прозору і проникну полімерну плівку',
        image: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/ABC7/production/_108957934_544ffa0b-fe98-45ea-aaaa-fb1f9e31e9ba.jpg',
        link: 'https://www.bbc.com/ukrainian/features-49959396'
    },
    {
        textName: 'Ocean Cleanup: перший успіх в океані',
        text:'Течії постійно розносять відходи людства і утворюють цілі сміттєві плями площею сотні тисяч квадратних кілометрів',
        image: 'https://naukatehnika.com/files/journal/tehnika-vooruzhenie/12.10.19-ocean-cleanup-proekt-po-sboru-plastika/ocean-cleanup-8.jpg',
        link: 'https://www.bbc.com/ukrainian/media-49967496'
    },
    {
        textName: 'Пейджери, касети й тамагочі: хто досі ними користується?',
        text:'Хоча ви більше не побачите їх у Японії, використання пейджерів припинили ще не скрізь. І вони - не єдина "застаріла" річ, якою досі користуються у світі',
        image: 'https://ichef.bbci.co.uk/news/624/cpsprodpb/0675/production/_109035610_pager.jpg',
        link: 'https://www.bbc.com/ukrainian/features-49950523'
    },
    {
        textName: 'Екзоскелет, здатний "читати думки", допоміг паралізованому чоловіку рухатися',
        text:'Герой цієї історії, 30-річний Тібо, сказав, що, коли робив перші кроки в екзокостюмі, відчував себе "першою людиною на Місяці"',
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/473F/production/_109093281_clinatec_juliettetreillet-49.jpg',
        link: 'https://www.bbc.com/ukrainian/news-49944925'
    },
    {
        textName: 'Польоти на Марс. Ілон Маск обіцяє вивести корабель Starship на орбіту вже через пів року',
        text:'Маск показав макет прототипу корабля на випробувальному полігоні компанії в Бока-Чіка в штаті Техас. За словами Маска, в найближчі місяці планується серія його польотних випробувань',
        image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/17599/production/_109014659_056905378-1.jpg',
        link: 'https://www.bbc.com/ukrainian/news-49871737'
    },
    {
        textName: 'Facebook почав приховувати лайки. Спочатку - в Австралії',
        text:'Пілотний проєкт запускається у п`ятницю, 27 вересня. Частина австралійських користувачів не зможе бачити лайки та інші реакції під чужими дописами',
        image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/9FEA/production/_108983904_gettyimages-1167455386.jpg',
        link: 'https://www.bbc.com/ukrainian/news-49850286'
    },
    {
        textName: 'YouTube заробляє на рекламі шарлатанських ліків від раку?',
        text:'Користуючись внутрішнім пошуком YouTube десятьма мовами, наші журналісти знайшли понад 80 відео з оманливою інформацією про здоров`я',
        image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/FA4F/production/_108797046_youtube-medicine.jpg',
        link: 'https://www.bbc.com/ukrainian/features-49746614'
    },
    {
        textName: 'З комп`ютером і смартфоном у 90 років: історія харків`янки',
        text:'Тож вона записалася на безкоштовні курси для учнів поважного віку. Курси організував та фінансує ІТ-ентузіаст і засновник музею комп`ютерів у Харкові, а викладачі працюють на волонтерських засадах',
        image: 'https://ichef.bbci.co.uk/news/1024/branded_ukrainian/15BD4/production/_108844098_p07nl8h1.jpg',
        link: 'https://www.bbc.com/ukrainian/media-49733618'
    }
];

class NewsOne extends Component {
    constructor() {
		super();

		this.state = {
            news: ARTICLES,
			count: 2
        };
        
        this.addNews = this.addNews.bind(this);
    }
    addNews() {
        const { news, count } = this.state;

        this.setState({
            count: count + 2,
        });
    }
    render() {
        const { news, count } = this.state;
        return(
            <>
                <ul className = "news">
                    <h1 className = "news__titel">News</h1>
                    {
                        news.slice(0, count).map(articlArr => (                           
                            <li className = "news__list">
                                <h4 className = "news__list__titel">
                                    {articlArr.textName}
                                </h4>
                                <img src={articlArr.image} alt="photo news" className = "news__list__image" />
                                <p className = "news__list__description">
                                    {articlArr.text}
                                    <a href={articlArr.link} className = "news__list__link">...</a>
                                </p>
                            </li>
                           
                            )
                        )
                        
                    }                  
                </ul>
                <button className = "addnews" onClick = {this.addNews}>
                    Показать еще
                </button>            
            </>
        );
    }
}

export default NewsOne