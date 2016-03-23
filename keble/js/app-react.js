
var NewsListing = React.createClass({
    render: function() {
        console.log('In NewsListing render');
        return (
            <div>REACT NEWS LISTING</div>
        );
    }
});

ReactDOM.render(
    <NewsListing />, document.getElementById('news-listing')
);
