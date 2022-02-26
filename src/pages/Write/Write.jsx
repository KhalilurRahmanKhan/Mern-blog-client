import './write.css';

const Write = () => {
    return (
        <div className="write">
            <img src="https://picsum.photos/300" alt="" />
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="title">
                        <i class="fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id="title" style={{display:"none"}} />
                    <input type="text"  placeholder="Title goes here..." />
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" cols="" rows="" placeholder="Content goes here..."></textarea>
                </div>
                <button>Publish</button>
            </div>
        </div>
    );
};

export default Write;