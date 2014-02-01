/*
 * This application shows how to use websockets with the embedded Jetty
 * web server.
 */

package com.restlessdev.javachatroom;

/**
 * This class represents a very simple chatroom message.
 *
 * @author Mike Arace
 */
public class ChatroomMessage {

    /**
     * The IP address the message came from.
     */
    String fromAddress = null;

    /**
     * The message itself.
     */
    String message = null;

    public ChatroomMessage(String fromAddress, String message) {
        this.fromAddress = fromAddress;
        this.message = message;
    }

    /**
     * Returns a formatted version of the message.
     *
     * @return
     */
    public String print() {
        return "<p>[" + this.fromAddress + "] " + this.message + "</p>";
    }
}
