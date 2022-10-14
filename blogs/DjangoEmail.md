# How does email work in a Django app?
There are plenty of reasons you might want to send an
email from your Django application. My scenario looks something like this:

Users can register with my service and select 1 of 4 levels of access. To
them, this looks like selecting a role within the service, but to me, it determines
which features they can see. One user type is basically a power-user: they can
flat-out change things in the database without anyone checking their work. If
I don't do any additional checks, then literally anyone can be a power-user.
So, I want my Django app to send me an email when a new power-user signs up.
I then have to go confirm this user's status and the user is given a lower level
of access in the meantime.

## What does the email setup look like?
Django actually makes it quite simple to send an email.

In your `views.py` file, you add `from django.core.mail import send_mail`.
The function `send_mail` takes at least 4 arguments:
* subject
* message
* from_email
* recipient_list

So a basic call to `send_mail` would look something like this:

```
send_mail("This is the subject", "Here is the email content", "from@me.com", ["to@you.com"])
```
This returns an integer representing the number of emails that were successfully sent.

This function can also take a number of named parameters:
* fail_silently: a boolean value; raises an exception in case of error when its False
* auth_user: the user login if its not already set in `settings.py`
* auth_password: the user password if its not already set in `settings.py`
* connection: email backend
* html_message: if used, the email will be multipart

## But wait, there's more...
Maybe you're like me and you've set up all the logic for when your email
needs to be sent and you plop in that bit of code above expecting it to work.
And then it doesn't work. And you don't know why. So you write a blog post about it.

### You need to add some settings
The following values need to be set in `settings.py` in order for email to work:
* EMAIL_HOST: SMTP server
* EMAIL_HOST_USER: SMTP server login credentials
* EMAIL_HOST_PASSWORD: SMTP server password credentials
* EMAIL_PORT: port of SMTP server
* EMAIL_USE_TLS or EMAIL_USE_SSL: a boolean value to specify the connection security level

Let's get one thing out of the way right off the bat: "SMTP" stands for "Simple
Mail Transfer Protocol" and is one of two main internet protocols used for sending
email.

[This resource](https://www.educba.com/django-mail/) gives a good example of what these values could be set to:

```
#---------- EMAIL HANDELING ----------#
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'testmysmtpconnection@gmail.com'
EMAIL_HOST_PASSWORD =  '*********'
EMAIL_USE_TLS = True
```

Now onto the confusing parts...

### What should *I* set these values to?
The project I'm working on is relatively small. We don't have our own
email server or GSuite set up. I can't just make a `noreply@service.ca` email
and plop it into those values. So now what?

#### EMAIL_BACKEND
This variable is just explicitly stating that we'll be using SMTP as our email
protocol. You can use the exact value from the example above!

#### EMAIL_HOST
This is the SMTP host name that Django is expecting to reach. Examples include
`smtp.gmail.com` or `smtp.mail.yahoo.com`. Check out [this resource](https://knowledge.hubspot.com/email-notifications/how-can-i-find-my-email-servers-imap-and-smtp-information)
for a more detailed guide on how to find your email service's SMTP host name.

#### EMAIL_PORT
This is the port that the email provider uses for SMTP connections. According to
[this post](https://www.sparkpost.com/blog/what-smtp-port/) you can find your
SMTP host name and port from the support page of your email service.

#### EMAIL_HOST_USER
This is the username that Django will use to connect to your email service.

#### EMAIL_HOST_PASSWORD
And this is the password associated with the EMAIL_HOST_USER.

#### EMAIL_USE_TSL
Lastly, you'll want to set this value to True if you want to use TLS encryption
on your emails. You could also use `EMAIL_USE_SSL` or just leave this argument out all
together.

## Next Steps
Now that you have all of this set up, that little chunk of python code above
should work!
