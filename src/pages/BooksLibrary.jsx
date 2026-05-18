import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { booksData } from '../data/booksData';
import Navigation from '../components/Navigation';
import AudioPlayer from '../components/AudioPlayer';
import './BooksLibrary.css';

const BooksLibrary = () => {
    const { settings } = useAppStore();
    const [selectedBook, setSelectedBook] = useState(null);

    const handleRead = (book) => {
        setSelectedBook(book);
    };

    const [activeTab, setActiveTab] = useState('books');

    return (
        <div className="books-page app-container">
            <header className="books-header">
                <h1 className="divine-name">
                    {settings.language === 'ar' ? 'المكتبة الجامعة' : 'The Grand Library'}
                </h1>
                <p>
                    {settings.language === 'ar'
                        ? 'نور للعين وضياء للأذن - اقرأ واستمع'
                        : 'Light for the eyes, Radiance for the ears'}
                </p>
            </header>

            <div className="library-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                <button
                    className={`tab-btn ${activeTab === 'books' ? 'active' : ''}`}
                    onClick={() => setActiveTab('books')}
                    style={{
                        background: activeTab === 'books' ? 'var(--color-gold)' : 'transparent',
                        color: activeTab === 'books' ? 'black' : 'white',
                        padding: '10px 30px',
                        borderRadius: '25px',
                        border: '1px solid var(--color-gold)',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                    }}
                >
                    {settings.language === 'ar' ? '📚 الكتب' : 'Books'}
                </button>
                <button
                    className={`tab-btn ${activeTab === 'audio' ? 'active' : ''}`}
                    onClick={() => setActiveTab('audio')}
                    style={{
                        background: activeTab === 'audio' ? 'var(--color-gold)' : 'transparent',
                        color: activeTab === 'audio' ? 'black' : 'white',
                        padding: '10px 30px',
                        borderRadius: '25px',
                        border: '1px solid var(--color-gold)',
                        cursor: 'pointer',
                        fontSize: '1.1rem',
                        fontWeight: 'bold'
                    }}
                >
                    {settings.language === 'ar' ? '🎧 الصوتيات' : 'Audio'}
                </button>
            </div>

            {activeTab === 'books' ? (
                !selectedBook ? (
                    <div className="books-grid">
                        {booksData.map((book) => (
                            <div key={book.id} className="book-card" onClick={() => handleRead(book)}>
                                <div className="book-cover-wrapper">
                                    <div className="book-cover-spine"></div>
                                    <div className="book-cover-front">
                                        <h3>{book.title[settings.language]}</h3>
                                        <span className="author">{book.author[settings.language]}</span>
                                    </div>
                                </div>
                                <div className="book-info">
                                    <h3>{book.title[settings.language]}</h3>
                                    <p>{book.description[settings.language]}</p>
                                    <div className="book-meta">
                                        <span>📄 {book.pages} {settings.language === 'ar' ? 'صفحة' : 'Pages'}</span>
                                        <span>💾 {book.size}</span>
                                    </div>
                                    <button className="read-btn">
                                        {settings.language === 'ar' ? 'اقرأ الآن' : 'Read Now'}
                                    </button>
                                    <a
                                        href={book.pdfUrl}
                                        download
                                        className="download-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        ⬇️
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="pdf-reader">
                        <div className="reader-controls">
                            <button onClick={() => setSelectedBook(null)} className="back-btn">
                                {settings.language === 'ar' ? 'عودة للمكتبة' : 'Back to Library'}
                            </button>
                            <h3>{selectedBook.title[settings.language]}</h3>
                            <a href={selectedBook.pdfUrl} download className="nav-controls" style={{ textDecoration: 'none', color: 'white', padding: '5px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }}>
                                {settings.language === 'ar' ? 'تحميل' : 'Download'}
                            </a>
                        </div>
                        <div className="pdf-container">
                            <iframe
                                src={selectedBook.pdfUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 'none', height: '80vh', background: 'white' }}
                                title="PDF Viewer"
                            />
                        </div>
                    </div>
                )
            ) : (
                <div className="audio-section">
                    <AudioPlayer language={settings.language} />
                </div>
            )}

            <Navigation />
        </div>
    );
};

export default BooksLibrary;
