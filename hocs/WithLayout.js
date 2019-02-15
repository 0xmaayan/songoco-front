import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

export default ComposedComponent => {
    class WithLayout extends React.Component {
        static async getInitialProps(ctx) {
            return ComposedComponent.getInitialProps(ctx)
        }
        render() {
            return (
                <div>
                    <Head>
                        <meta charset="utf-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                        <meta name="author" content="Maayan" />
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <title>Songoco</title>
                    </Head>
                    <ComposedComponent {...this.props} />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                </div>
            );
        }
    }
    const mapStateToProps = (state) => {
        return {

        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {

        };
    };
    return connect(mapStateToProps, mapDispatchToProps)(WithLayout);
};
