from django.views.generic import TemplateView


class Fittrack(TemplateView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['app_name'] = 'Fittrack'
        return context


class Homeview(Fittrack):
    template_name = 'MaluHTML/Micasatio.html'


class HomeView(Homeview):
    pass


class LoginView(Fittrack):
    template_name = 'MaluHTML/Login.html'

class RegistroView(Fittrack):
    template_name = 'MaluHTML/Registro.html'