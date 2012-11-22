///////////////////////////////////////////////////////////////////////////////
// Version 1.0.0
// Written for Bootstrap Lovers by
// Prabin Pebam
// http://designspebam.com
///////////////////////////////////////////////////////////////////////////////
$(function () {
	//initiating tooltip
    $("[rel=tooltip]").tooltip();

	$('.colorPicker').each(function() {
		$(this).css('background-color', $(this).val());
		var rgb = hexToRgb($(this).val()),
			d = 0,
			fontColor = "#000000",
			a = 1 - ( 0.299 * rgb.r + 0.587 * rgb.b + 0.114 * rgb.b)/255;

			if (a < 0.5){
				fontColor = "#000000"; //Bright BG - Black font
			}else{
				fontColor = "#ffffff"; //Dark BG - White font
			}

			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColor);

	});

	////////////////////////////////////////////////////////////
	//Actions for Misc 1
	////////////////////////////////////////////////////////////
	$('#bodyBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {
			
			
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview").css('background-color', $('#bodyBackground').val());
			
			//setting the table background color to the set value as it is initially transparent
			$(".preview table").css("background-color", $('#tableBackground').val());
			


		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#textColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//jquery css() does not work for applying hover color
			$(".preview p").css("color", $('#textColor').val());
			$(".preview table").css("color", $('#textColor').val());
			
			//exclude the text inside Hero Unit			
			$(".preview .hero-unit p").css("color", $('#heroUnitLeadColor').val());
			

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#headingsColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//jquery css() does not work for applying hover color
			$(".preview h3").css("color", $('#headingsColor').val());
			$(".preview h4").css("color", $('#headingsColor').val());
			
			//exclude the heading inside Hero Unit
			$(".preview .hero-unit h1").css("color", $('#heroUnitHeadingColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#linkColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#preview p a").css('color', $('#linkColor').val());
			$("#preview .pagination .normal a").css('color', $('#linkColor').val());

			//jquery css() does not work for applying hover color
			$("#preview p a").attr("onMouseOver", "this.style.color='"+$('#linkColorHover').val()+"'");
			$("#preview p a").attr("onMouseOut", "this.style.color='"+$('#linkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#linkColorHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//jquery css() does not work for applying hover color
			$("#preview p a").attr("onMouseOver", "this.style.color='"+$('#linkColorHover').val()+"'");
			$("#preview p a").attr("onMouseOut", "this.style.color='"+$('#linkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	
	
	////////////////////////////////////////////////////////////
	//Actions for Misc 2
	////////////////////////////////////////////////////////////
	$('#paginationBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
				$("#preview .pagination .normal a").css('background-color', $('#paginationBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$("#preview .pagination .normal a").hover(
		function(){
			$(this).css('background-color', $('#paginationActiveBackground').val());
			$(this).css('color', $('#linkColorHover').val());
		},
		function(){
			$(this).css('background-color', $('#paginationBackground').val());
			$(this).css('color', $('#linkColor').val());
		}
	);
	
	$('#paginationActiveBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
				$("#preview .pagination .active a").css('background-color', $('#paginationActiveBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#paginationBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
				$("#preview .pagination a").css('border-color', $('#paginationBorder').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#hrBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$("#preview hr").css('border-top', "1px solid "+$('#hrBorder').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#wellBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .well").css('background-color', $('#wellBackground').val());
			$(".preview .well").css('border', "1px solid "+ColorLuminance($('#wellBackground').val(), -0.7));

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	
	////////////////////////////////////////////////////////////
	//Actions for Misc 2
	////////////////////////////////////////////////////////////
	$('#heroUnitBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .hero-unit").css('background-color', $('#heroUnitBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#heroUnitHeadingColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .hero-unit h1").css('color', $('#heroUnitHeadingColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#heroUnitLeadColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .hero-unit p").css('color', $('#heroUnitLeadColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	
	////////////////////////////////////////////////////////////
	//Actions for Tables
	////////////////////////////////////////////////////////////
	$('#tableBackgroundAccent').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#preview .rowAccent td").css("background-color", $('#tableBackgroundAccent').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#tableBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview td").css("border-top", "1px solid "+$('#tableBorder').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#tableBackgroundHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview td").css("background-color", $('#tableBackgroundHover').val());
			$(".preview .rowAccent td").css("background-color", $('#tableBackgroundAccent').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			$(".preview td").css("background-color", $('#tableBackground').val());
			$(".preview .rowAccent td").css("background-color", $('#tableBackgroundAccent').val());
		}
	});
	
	$('.preview td').hover(
		function(){
			$(this).css("background-color", $('#tableBackgroundHover').val());
			$(this).siblings('td').css("background-color", $('#tableBackgroundHover').val());
		},
		function(){
			$(".preview table").css("background-color", $('#tableBackground').val());
			$(".preview td").css("background-color", $('#tableBackground').val());
			$(".preview .rowAccent td").css("background-color", $('#tableBackgroundAccent').val());
		}
	);
	
	$('#tableBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview table").css("background-color", $('#tableBackground').val());
			$(".preview td").css("background-color", $('#tableBackground').val());
			$(".preview .rowAccent td").css("background-color", $('#tableBackgroundAccent').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	
	/////////////////////////////////////////////////////////////////////////////////////////
	//Action for forms
	/////////////////////////////////////////////////////////////////////////////////////////
	
	$(".preview .formPreview input").focusout(function(){
		$(".preview .formPreview input").val("");	
	});
	
	$(".preview .formPreview select").focusout(function(){
		$(".preview .formPreview select").val("");	
	});
	
	$(".preview .formPreview textarea").focusout(function(){
		$(".preview .formPreview textarea").val("");	
	});
	
	$('#placeholderText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .formPreview input:first").val("Placeholder preview");
			$(".preview .formPreview input:first").css("color", $('#placeholderText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			$(".preview .formPreview input:first").val("");
			$(".preview .formPreview input:first").css("color", $('grayDark').val());
		}
	});
		
	$('#inputBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .formPreview input").css("background-color", $('#inputBackground').val());
			$(".preview .formPreview input:last").css("background-color", $('#inputDisabledBackground').val());
			$(".preview .formPreview select").css("background-color", $('#inputBackground').val());
			$(".preview .formPreview textarea").css("background-color", $('#inputBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
		}
	});
	
	$('#inputBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .formPreview input").css("border", "1px solid "+$('#inputBorder').val());
			$(".preview .formPreview select").css("border", "1px solid "+$('#inputBorder').val());
			$(".preview .formPreview textarea").css("border", "1px solid "+$('#inputBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
		}
	});
	
	$('#inputBorderRadius').keyup(function(){
		//cache our input since we will be working with it each time an arrow key is pressed
		var $input = $('#inputBorderRadius'),
			strLength = $('#inputBorderRadius').val().length;
		
		
		//up-arrow (regular and num-pad)
		if (event.which == 38 || event.which == 104) {

			//make sure to use `parseInt()` so you can numerically add to the value rather than concocting a longer string
			$input.val((parseInt($input.val().substring(0,strLength-2)) + 1)+"px");

		//down-arrow (regular and num-pad)
		}else if (event.which == 40 || event.which == 98) {
			$input.val((parseInt($input.val().substring(0,strLength-2)) - 1)+"px");
		}
	
		$(".preview .formPreview input").css("-webkit-border-radius", $('#inputBorderRadius').val());
		$(".preview .formPreview select").css("-webkit-border-radius", $('#inputBorderRadius').val());
		$(".preview .formPreview textarea").css("-webkit-border-radius", $('#inputBorderRadius').val());
		
		
	});	
		
	$('#inputDisabledBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .formPreview input:last").css("background-color", $('#inputDisabledBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
		}
	});
	
	$('#formActionsBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$(".preview .formPreview .form-actions").css("background-color", $('#formActionsBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
		}
	});
	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////
	//Action for Buttons
	/////////////////////////////////////////////////////////////////////////////////////////
	$('#btnBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-normal").css('background-image', "-webkit-linear-gradient(top, "+$('#btnBackground').val()+", "+$('#btnBackgroundHighlight').val()+")");
			$(".preview .btn-normal").css('background-color', $('#btnBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-normal").css('background-image', "-webkit-linear-gradient(top, "+$('#btnBackground').val()+", "+$('#btnBackgroundHighlight').val()+")");
			$(".preview .btn-normal").css('background-color', $('#btnBackgroundHighlight').val());
			
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	
	$('#btnPrimaryBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-primary").css('background-image', "-webkit-linear-gradient(top, "+$('#btnPrimaryBackground').val()+", "+$('#btnPrimaryBackgroundHighlight').val()+")");
			$(".preview .btn-primary").css('background-color', $('#btnPrimaryBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnPrimaryBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-primary").css('background-image', "-webkit-linear-gradient(top, "+$('#btnPrimaryBackground').val()+", "+$('#btnPrimaryBackgroundHighlight').val()+")");
			$(".preview .btn-primary").css('background-color', $('#btnPrimaryBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnInfoBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-info").css('background-image', "-webkit-linear-gradient(top, "+$('#btnInfoBackground').val()+", "+$('#btnInfoBackgroundHighlight').val()+")");
			$(".preview .btn-info").css('background-color', $('#btnInfoBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnInfoBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-info").css('background-image', "-webkit-linear-gradient(top, "+$('#btnInfoBackground').val()+", "+$('#btnInfoBackgroundHighlight').val()+")");
			$(".preview .btn-info").css('background-color', $('#btnInfoBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnSuccessBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-success").css('background-image', "-webkit-linear-gradient(top, "+$('#btnSuccessBackground').val()+", "+$('#btnSuccessBackgroundHighlight').val()+")");
			$(".preview .btn-success").css('background-color', $('#btnSuccessBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnSuccessBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-success").css('background-image', "-webkit-linear-gradient(top, "+$('#btnSuccessBackground').val()+", "+$('#btnSuccessBackgroundHighlight').val()+")");
			$(".preview .btn-success").css('background-color', $('#btnSuccessBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnWarningBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-warning").css('background-image', "-webkit-linear-gradient(top, "+$('#btnWarningBackground').val()+", "+$('#btnWarningBackgroundHighlight').val()+")");
			$(".preview .btn-warning").css('background-color', $('#btnWarningBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnWarningBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-warning").css('background-image', "-webkit-linear-gradient(top, "+$('#btnWarningBackground').val()+", "+$('#btnWarningBackgroundHighlight').val()+")");
			$(".preview .btn-warning").css('background-color', $('#btnWarningBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnDangerBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-danger").css('background-image', "-webkit-linear-gradient(top, "+$('#btnDangerBackground').val()+", "+$('#btnDangerBackgroundHighlight').val()+")");
			$(".preview .btn-danger").css('background-color', $('#btnDangerBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnDangerBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-danger").css('background-image', "-webkit-linear-gradient(top, "+$('#btnDangerBackground').val()+", "+$('#btnDangerBackgroundHighlight').val()+")");
			$(".preview .btn-danger").css('background-color', $('#btnDangerBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnInverseBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-inverse").css('background-image', "-webkit-linear-gradient(top, "+$('#btnInverseBackground').val()+", "+$('#btnInverseBackgroundHighlight').val()+")");
			$(".preview .btn-inverse").css('background-color', $('#btnInverseBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#btnInverseBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$(".preview .btn-inverse").css('background-image', "-webkit-linear-gradient(top, "+$('#btnInverseBackground').val()+", "+$('#btnInverseBackgroundHighlight').val()+")");
			$(".preview .btn-inverse").css('background-color', $('#btnInverseBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	
	/////////////////////////////////////////////////////////////////////////////////////////
	//Alerts
	/////////////////////////////////////////////////////////////////////////////////////////
	//for warning alert
	$('#warningBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-warning").css('background-color', $('#warningBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#warningText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-warning").css('color', $('#warningText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#warningBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-warning").css('border', "1px solid "+$('#warningBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	//for error alert
	$('#errorBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-error").css('background-color', $('#errorBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#errorText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-error").css('color', $('#errorText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#errorBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-error").css('border', "1px solid "+$('#errorBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	//for success alert
	$('#successBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-success").css('background-color', $('#successBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#successText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-success").css('color', $('#successText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#successBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-success").css('border', "1px solid "+$('#successBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	//for info alert
	$('#infoBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-info").css('background-color', $('#infoBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#infoText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-info").css('color', $('#infoText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#infoBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#alertPreview .alert-info").css('border', "1px solid "+$('#infoBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});


	////////////////////////////////////////////////////
	// Navbar common actions
	////////////////////////////////////////////////////
	$('#navbarHeight').change(function(){
		//for Normal navbar
		$("#navbarPreview .navbar-inner").css('min-height', $(this).val());
		$("#navbarPreview .brand").css('padding', ($('#navbarHeight').val().slice(0,-2)-20)/2+"px 20px "+($('#navbarHeight').val().slice(0,-2)-20)/2+"px");
		$("#navbarPreview .navbar-text").css('line-height', $('#navbarHeight').val());
		$("#navbarPreview .divider-vertical").css('height', $('#navbarHeight').val());
		$("#navbarPreview .nav > li > a").css('padding', ($('#navbarHeight').val().slice(0,-2)-20)/2+"px 15px "+($('#navbarHeight').val().slice(0,-2)-20)/2+"px");
		$("#navbarPreview .navbar-search").css('margin-top', ($('#navbarHeight').val().slice(0,-2)-30)/2+"px");
		$("#navbarPreview .btn-navbar").css('margin-top', ($('#navbarHeight').val().slice(0,-2)-30)/2+"px");

		//for navbar-inverse
		$("#navbarInversePreview .navbar-inner").css('min-height', $(this).val());
		$("#navbarInversePreview .brand").css('padding', ($('#navbarHeight').val().slice(0,-2)-20)/2+"px 20px "+($('#navbarHeight').val().slice(0,-2)-20)/2+"px");
		$("#navbarInversePreview .navbar-text").css('line-height', $('#navbarHeight').val());
		$("#navbarInversePreview .divider-vertical").css('height', $('#navbarHeight').val());
		$("#navbarInversePreview .nav > li > a").css('padding', ($('#navbarHeight').val().slice(0,-2)-20)/2+"px 15px "+($('#navbarHeight').val().slice(0,-2)-20)/2+"px");
		$("#navbarInversePreview .navbar-search").css('margin-top', ($('#navbarHeight').val().slice(0,-2)-30)/2+"px");
		$("#navbarInversePreview .btn-navbar").css('margin-top', ($('#navbarHeight').val().slice(0,-2)-30)/2+"px");
	});



	////////////////////////////////////////////////////
	// Navbar actions
	////////////////////////////////////////////////////
	$('#navbarBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {
			var searchBorderHex = ColorLuminance($(this).val(), -0.30);

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .navbar-inner").css('background-color', $(this).val());
			$("#navbarPreview .navbar-inner").css('background-image', "-webkit-linear-gradient(top, "+$('#navbarBackgroundHighlight').val()+", "+$('#navbarBackground').val()+" )");
			$("#navbarPreview .divider-vertical").css('border-left', "1px solid "+$('#navbarBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .navbar-inner").css('background-image', "-webkit-linear-gradient(top, "+$('#navbarBackgroundHighlight').val()+", "+$('#navbarBackground').val()+" )");
			$("#navbarPreview .nav > li > a").css('text-shadow', "0 1px 0 "+$('#navbarBackgroundHighlight').val());
			$("#navbarPreview .divider-vertical").css('border-right', "1px solid "+$('#navbarBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .navbar-inner").css('border-color', $('#navbarBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview").css('color', $('#navbarText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarBrandColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));


			$("#navbarPreview .brand").css('color', $('#navbarBrandColor').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarLinkColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .navbar-link").css('color', $('#navbarLinkColor').val());
			$("#navbarPreview .nav > li > a").css('border-top-color', $('#navbarLinkColor').val());
			$("#navbarPreview .nav li.dropdown > .dropdown-toggle .caret").css('border-bottom-color', $('#navbarLinkColor').val());

			$("#navbarPreview .nav > li > a").css('color', $('#navbarLinkColor').val());
			$("#navbarPreview .nav li.dropdown > .dropdown-toggle .caret").css('border-bottom-color', $('#navbarLinkColor').val());
			$("#navbarPreview .nav li.dropdown > .dropdown-toggle .caret").css('border-top-color', $('#navbarLinkColor').val());

			//jquery css() does not work for applying hover color
			$("#navbarPreview a").attr("onMouseOver", "this.style.color='"+$('#navbarLinkColorHover').val()+"'");
			$("#navbarPreview a").attr("onMouseOut", "this.style.color='"+$('#navbarLinkColor').val()+"'");

			//Excluding the active link
			$("#navbarPreview .active a").css("color", $('#navbarLinkColorActive').val());
			$("#navbarPreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");
			$("#navbarPreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");

			//excluding the links in dropdown
			$('#navbarPreview .dropdown-menu a').css('color', $('#dropdownLinkColor').val());
			$("#navbarPreview .dropdown-menu a").attr("onMouseOver", "this.style.color='"+$('#dropdownLinkColorHover').val()+"'");
			$("#navbarPreview .dropdown-menu a").attr("onMouseOut", "this.style.color='"+$('#dropdownLinkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarLinkColorHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//jquery css() does not work for applying hover color
			$("#navbarPreview a").attr("onMouseOver", "this.style.color='"+$('#navbarLinkColorHover').val()+"'");
			$("#navbarPreview a").attr("onMouseOut", "this.style.color='"+$('#navbarLinkColor').val()+"'");

			//Excluding the active link
			$("#navbarPreview .active a").css("color", $('#navbarLinkColorActive').val());
			$("#navbarPreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");
			$("#navbarPreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");

			//excluding the links in dropdown
			$("#navbarPreview .dropdown-menu a").attr("onMouseOver", "this.style.color='"+$('#dropdownLinkColorHover').val()+"'");
			$("#navbarPreview .dropdown-menu a").attr("onMouseOut", "this.style.color='"+$('#dropdownLinkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarLinkColorActive').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .active a").css("color", $('#navbarLinkColorActive').val());
			$("#navbarPreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");
			$("#navbarPreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarLinkColorActive').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	//action for navbarInverseLinkBackgroundHover/////////////////////////////////////////////////////////////////////
	$('#navbarLinkBackgroundHover').change(function(){
		if(checkHex($(this).val())){
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(hexToRgb($(this).val())));
		}else{
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', '#ffffff');
			$(this).css('color', '#333333');
		}
	});
	
	$("#navbarPreview .nav>li").hover(
		function(){
			//don't apply effect on navbar text and active links
			if(!(($(this).hasClass('active')))){
				if(!($(this).hasClass('navbar-text'))){
						if(checkHex($('#navbarLinkBackgroundHover').val())){
							$(this).css('background-color', $('#navbarLinkBackgroundHover').val());
						}
				}		
			}
		},
		
		function(){
			$(this).css('background-color', 'rgba(0,0,0,0)');
		}
	);
	//End of actions for navbarInverseLinkBackgroundHover/////////////////////////////////////////////////////////////////////
	
	
	$('#navbarLinkBackgroundActive').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview .active a").css("background-color", $('#navbarLinkBackgroundActive').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	//setting the color of dropdown toggle link to the active link background and back to normal on toggle off
	$('#navbarPreview .dropdown').click(function(){
		$(this).children('a').css("background-color", $('#navbarLinkBackgroundActive').val());
	});
	$('html').click(function() {
		//change back the color of dropdown back to navbar color by setting it as transparent
		var container = $("#navbarPreview .dropdown.open");
		container.children('a').css("background-color", "rgba(0,0,0,0)");
	});

	$('#navbarPreview .dropdown.open').click(function(event){
		event.stopPropagation();
	});


	//Navbar search customizations//////////////////////////////////////////////////////////////////////////////////////////////
	$('#navbarSearchBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview input").css('border', '1px solid '+$('#navbarSearchBorder').val());
			$("#navbarPreview input").css('background-color',  $('#navbarSearchBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});


	$('#navbarSearchBackgroundFocus').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview input").css("background-color", $('#navbarSearchBackgroundFocus').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			var searchBorderHex = ColorLuminance($(this).val(), -0.30);

			//setting back to the unfocus color state
			$("#navbarPreview input").css('border', '1px solid '+$('#navbarBackground').val());
			$("#navbarPreview input").css('background-color',  $('#navbarSearchBackground').val());
		}
	});
	
	$('#navbarSearchBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarPreview input").css('border', '1px solid '+$('#navbarSearchBorder').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarSearchPlaceholderColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$('#navbarPreview input').css('color', $('#navbarSearchPlaceholderColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$("#navbarPreview input").focus(function(){
		$(this).css('background-color', $('#navbarSearchBackgroundFocus').val());
		//setting the text color from the body text color
		$(this).css('color', $('#textColor').val());
	});

	$("#navbarPreview input").blur(function(){
		$(this).css('background-color', $('#navbarSearchBackground').val());
		$(this).css('color', $('#navbarSearchPlaceholderColor').val());
		$(this).val('');
	});

	//End of Navbar actions




	///////////////////////////////////////////////////
	//Navbar inverse actions
	///////////////////////////////////////////////////

	$('#navbarInverseBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .navbar-inner").css('background-color', $(this).val());
			$("#navbarInversePreview .navbar-inner").css('background-image', "-webkit-linear-gradient(top, "+$('#navbarInverseBackgroundHighlight').val()+", "+$('#navbarInverseBackground').val()+" )");
			$("#navbarInversePreview .divider-vertical").css('border-left', "1px solid "+$('#navbarInverseBackground').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseBackgroundHighlight').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .navbar-inner").css('background-image', "-webkit-linear-gradient(top, "+$('#navbarInverseBackgroundHighlight').val()+", "+$('#navbarInverseBackground').val()+" )");
			$("#navbarInversePreview .nav > li > a").css('text-shadow', "0 1px 0 "+$('#navbarInverseBackgroundHighlight').val());
			$("#navbarInversePreview .divider-vertical").css('border-right', "1px solid "+$('#navbarInverseBackgroundHighlight').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .navbar-inner").css('border-color', $('#navbarInverseBorder').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseText').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview").css('color', $('#navbarInverseText').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});
	
	$('#navbarInverseBrandColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .brand").css('color', $('#navbarInverseBrandColor').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});


	$('#navbarInverseLinkColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));
			
			$("#navbarInversePreview .navbar-link").css('color', $('#navbarInverseLinkColor').val());
			$("#navbarInversePreview .nav > li > a").css('border-top-color', $('#navbarInverseLinkColor').val());
			$("#navbarInversePreview .nav li.dropdown > .dropdown-toggle .caret").css('border-bottom-color', $('#navbarInverseLinkColor').val());

			$("#navbarInversePreview .nav > li > a").css('color', $('#navbarInverseLinkColor').val());
			$("#navbarInversePreview .nav li.dropdown > .dropdown-toggle .caret").css('border-bottom-color', $('#navbarInverseLinkColor').val());
			$("#navbarInversePreview .nav li.dropdown > .dropdown-toggle .caret").css('border-top-color', $('#navbarInverseLinkColor').val());

			//jquery css() does not work for applying hover color
			$("#navbarInversePreview a").attr("onMouseOver", "this.style.color='"+$('#navbarInverseLinkColorHover').val()+"'");
			$("#navbarInversePreview a").attr("onMouseOut", "this.style.color='"+$('#navbarInverseLinkColor').val()+"'");

			//Excluding the active link
			$("#navbarInversePreview .active a").css("color", $('#navbarInverseLinkColorActive').val());
			$("#navbarInversePreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");
			$("#navbarInversePreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");

			//excluding the links in dropdown
			$('#navbarInversePreview .dropdown-menu a').css('color', $('#dropdownLinkColor').val());
			$("#navbarInversePreview .dropdown-menu a").attr("onMouseOver", "this.style.color='"+$('#dropdownLinkColorHover').val()+"'");
			$("#navbarInversePreview .dropdown-menu a").attr("onMouseOut", "this.style.color='"+$('#dropdownLinkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseLinkColorHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//jquery css() does not work for applying hover color
			$("#navbarInversePreview a").attr("onMouseOver", "this.style.color='"+$('#navbarInverseLinkColorHover').val()+"'");
			$("#navbarInversePreview a").attr("onMouseOut", "this.style.color='"+$('#navbarInverseLinkColor').val()+"'");

			//Excluding the active link
			$("#navbarInversePreview .active a").css("color", $('#navbarInverseLinkColorActive').val());
			$("#navbarInversePreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");
			$("#navbarInversePreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");

			//excluding the links in dropdown
			$("#navbarInversePreview .dropdown-menu a").attr("onMouseOver", "this.style.color='"+$('#dropdownLinkColorHover').val()+"'");
			$("#navbarInversePreview .dropdown-menu a").attr("onMouseOut", "this.style.color='"+$('#dropdownLinkColor').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseLinkColorActive').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .active a").css("color", $('#navbarInverseLinkColorActive').val());
			$("#navbarInversePreview .active a").attr("onMouseOver", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");
			$("#navbarInversePreview .active a").attr("onMouseOut", "this.style.color='"+$('#navbarInverseLinkColorActive').val()+"'");

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});	
	
	
	//action for navbarInverseLinkBackgroundHover/////////////////////////////////////////////////////////////////////
	$('#navbarInverseLinkBackgroundHover').change(function(){
		if(checkHex($(this).val())){
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(hexToRgb($(this).val())));
		}else{
			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', '#ffffff');
			$(this).css('color', '#333333');
		}
	});
	
	$("#navbarInversePreview .nav>li").hover(
		function(){
			//don't apply effect on navbar text and active links
			if(!(($(this).hasClass('active')))){
				if(!($(this).hasClass('navbar-text'))){
						if(checkHex($('#navbarInverseLinkBackgroundHover').val())){
							$(this).css('background-color', $('#navbarInverseLinkBackgroundHover').val());
						}
				}		
			}
		},
		
		function(){
			$(this).css('background-color', 'rgba(0,0,0,0)');
		}
	);
	//End of actions for navbarInverseLinkBackgroundHover/////////////////////////////////////////////////////////////////////
	
	

	$('#navbarInverseLinkBackgroundActive').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview .active a").css("background-color", $('#navbarInverseLinkBackgroundActive').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});


	//setting the color of dropdown toggle link to the active link background and back to normal on toggle off
	$('#navbarInversePreview .dropdown').click(function(){
		$(this).children('a').css("background-color", $('#navbarInverseLinkBackgroundActive').val());
	});

	$('html').click(function() {
		//change back the color of dropdown back to navbar color by setting it as transparent
		var container = $("#navbarInversePreview .dropdown.open");
		container.children('a').css("background-color", "rgba(0,0,0,0)");
	});

	$('#navbarInversePreview .dropdown.open').click(function(event){
		event.stopPropagation();
	});


	
	//navbar inverse search customizations///////////////////////////////////////////////////////////
	$('#navbarInverseSearchBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview input").css('border', '1px solid '+$('#navbarInverseSearchBorder').val());
			$("#navbarInversePreview input").css('background-color',  $('#navbarInverseSearchBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});


	$('#navbarInverseSearchBackgroundFocus').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview input").css("background-color", $('#navbarInverseSearchBackgroundFocus').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			var searchBorderHex = ColorLuminance($(this).val(), -0.30);

			//setting back to the unfocus color state
			$("#navbarInversePreview input").css('border', '1px solid '+$('#navbarInverseBackground').val());
			$("#navbarInversePreview input").css('background-color',  $('#navbarInverseSearchBackground').val());
		}
	});
	
	$('#navbarInverseSearchBorder').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#navbarInversePreview input").css('border', '1px solid '+$('#navbarInverseSearchBorder').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#navbarInverseSearchPlaceholderColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$('#navbarInversePreview input').css('color', $('#navbarInverseSearchPlaceholderColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$("#navbarInversePreview input").focus(function(){
		$(this).css('background-color', $('#navbarInverseSearchBackgroundFocus').val());
		//setting the text color from the body text color
		$(this).css('color', $('#textColor').val());
	});

	$("#navbarInversePreview input").blur(function(){
		$(this).css('background-color', $('#navbarInverseSearchBackground').val());
		$(this).css('color', $('#navbarInverseSearchPlaceholderColor').val());
		$(this).val('');
	});




	/////////////////////////////////////////////////////
	//Dropdown actions
	/////////////////////////////////////////////////////

	$('#dropdownBackground').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));


			$('#dropdownPreview ul').css('background-color', $('#dropdownBackground').val());
			$('#navbarPreview .dropdown-menu').css('background-color', $('#dropdownBackground').val());
			$('#navbarInversePreview .dropdown-menu').css('background-color', $('#dropdownBackground').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#dropdownLinkColor').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));


			$('#dropdownPreview ul a').css('color', $('#dropdownLinkColor').val());
			$('#navbarPreview .dropdown-menu a').css('color', $('#dropdownLinkColor').val());
			$('#navbarInversePreview .dropdown-menu a').css('color', $('#dropdownLinkColor').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#dropdownLinkColorHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//showing preview in realtime
			$("#dropdownPreview a:first").css('background-image', "-webkit-linear-gradient(top,"+$('#dropdownLinkBackgroundHover').val()+", "+ColorLuminance($('#dropdownLinkBackgroundHover').val(), -0.10)+")");
			$("#dropdownPreview a:first").css('color', $('#dropdownLinkColorHover').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			//closing the realtime preview
			$("#dropdownPreview a:first").css('background-image', "none");
			$("#dropdownPreview a:first").css('color', $('#dropdownLinkColor').val());
		}
	});

	//using the hover event to change the style of links in dropdown menu
	$("#dropdownPreview a").hover(
		function(){
			$(this).css('background-image', "-webkit-linear-gradient(top,"+$('#dropdownLinkBackgroundHover').val()+", "+ColorLuminance($('#dropdownLinkBackgroundHover').val(), -0.10)+")");
			$(this).css('color', $('#dropdownLinkColorHover').val());
		},

		function(){
			$(this).css('background-image', "none");
			$(this).css('color', $('#dropdownLinkColor').val());
		}
	);

	$("#navbarPreview .dropdown-menu a").hover(
		function(){
			$(this).css('background-image', "-webkit-linear-gradient(top,"+$('#dropdownLinkBackgroundHover').val()+", "+ColorLuminance($('#dropdownLinkBackgroundHover').val(), -0.10)+")");
			$(this).css('color', $('#dropdownLinkColorHover').val());
		},

		function(){
			$(this).css('background-image', "none");
			$(this).css('color', $('#dropdownLinkColor').val());
		}
	);

	$("#navbarInversePreview .dropdown-menu a").hover(
		function(){
			$(this).css('background-image', "-webkit-linear-gradient(top,"+$('#dropdownLinkBackgroundHover').val()+", "+ColorLuminance($('#dropdownLinkBackgroundHover').val(), -0.10)+")");
			$(this).css('color', $('#dropdownLinkColorHover').val());
		},

		function(){
			$(this).css('background-image', "none");
			$(this).css('color', $('#dropdownLinkColor').val());
		}
	);

	$('#dropdownLinkBackgroundHover').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			//showing preview in realtime
			$("#dropdownPreview a:first").css('background-image', "-webkit-linear-gradient(top,"+$('#dropdownLinkBackgroundHover').val()+", "+ColorLuminance($('#dropdownLinkBackgroundHover').val(), -0.10)+")");
			$("#dropdownPreview a:first").css('color', $('#dropdownLinkColorHover').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {
			//closing the realtime preview
			$("#dropdownPreview a:first").css('background-image', "none");
			$("#dropdownPreview a:first").css('color', $('#dropdownLinkColor').val());
		}
	});


	$('#dropdownDividerTop').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#dropdownPreview .divider").css('background-color', $('#dropdownDividerTop').val());
			$("#navbarPreview .dropdown-menu .divider").css('background-color', $('#dropdownDividerTop').val());
			$("#navbarInversePreview .dropdown-menu .divider").css('background-color', $('#dropdownDividerTop').val());
		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});

	$('#dropdownDividerBottom').miniColors({
		opacity: true,
		change: function(hex, rgba) {

			//updating the color background of the input text field with suitable font color for the bg color
			$(this).css('background-color', $(this).val());
			$(this).css('color', fontColorforBgColor(rgba));

			$("#dropdownPreview .divider").css('border-bottom', "1px solid "+$('#dropdownDividerBottom').val());
			$("#navbarPreview .dropdown-menu .divider").css('border-bottom', "1px solid "+$('#dropdownDividerBottom').val());
			$("#navbarInversePreview .dropdown-menu .divider").css('border-bottom', "1px solid "+$('#dropdownDividerBottom').val());

		},
		open: function(hex, rgb) {},
		close: function(hex, rgb) {}
	});



	//Determining suitable font color for background color
	function fontColorforBgColor(rgba){
		var d = 0,
				fontColor = "#000000",
				a = 1 - ( 0.299 * rgba.r + 0.587 * rgba.b + 0.114 * rgba.b)/255;

			if (a < 0.5){
				fontColor = "#000000"; //Bright BG - Black font
			}else{
				fontColor = "#ffffff"; //Dark BG - White font
			}
			return fontColor;
	}

	
	
	//function to check if given string is a valid hexademal color code
	function checkHex(code){
		var result = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(code);
		return result;
	}

	//function to conver hex to rgb
	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	function rgbToHex(r, g, b) {
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	//function to get lighter or darker color in hex
	function ColorLuminance(hex, lum) {
		// validate hex string
		hex = String(hex).replace(/[^0-9a-f]/gi, '');
		if (hex.length < 6) {
			hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
		}
		lum = lum || 0;
		// convert to decimal and change luminosity
		var rgb = "#", c, i;
		for (i = 0; i < 3; i++) {
			c = parseInt(hex.substr(i*2,2), 16);
			c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
			rgb += ("00"+c).substr(c.length);
		}
		return rgb;
	}
});